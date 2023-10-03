from flask import Flask, g, Response, url_for, request
import json
import sqlite3
import os.path
import requests
import datetime
from loguru import logger
from exponent_server_sdk import (
    DeviceNotRegisteredError,
    PushClient,
    PushMessage,
    PushServerError,
    PushTicketError,
)

app = Flask(__name__)

DATABASE = "./db.db"

mock = [
    {
        "category": "OC-2",
        "title": "Накладная на внутреннее перемещение ноутбука",
        "id": "94823123",
        "date": "2023-09-24",
        "statusDate": "2023-10-03",
        "status": "new",
        "author": "Иванов С.А.",
        "route": [
            {"name": "Петров А.П.", "number": "1", "date": ""},
            {"name": "Серебренникова А.В.", "number": "2", "date": ""},
        ],
    },
    {
        "category": "OC-2",
        "title": "Накладная на внутреннее перемещение стола",
        "id": "24855123",
        "date": "2023-09-17",
        "statusDate": "2023-09-26",
        "status": "new",
        "author": "Иванов С.А.",
        "route": [
            {"name": "Петров А.П.", "number": "2", "date": "2023-09-27"},
            {"name": "Серебренникова А.В.", "number": "1", "date": ""},
        ],
    },
    {
        "category": "OC-2",
        "title": "Накладная на внутреннее перемещение кресла",
        "id": "74823555",
        "date": "2023-09-22",
        "statusDate": "2023-09-25",
        "status": "reject",
        "author": "Иванов С.А.",
        "route": [
            {"name": "Серебренникова А.В.", "number": "1", "date": "2023-09-25"},
            {"name": "Петров А.П.", "number": "2", "date": "2023-09-25"},
        ],
    },
    {
        "category": "OC-2",
        "title": "Накладная на внутреннее перемещение монитора",
        "id": "54623123",
        "date": "2023-09-20",
        "statusDate": "2023-09-29",
        "status": "accept",
        "author": "Иванов С.А.",
        "route": [
            {"name": "Петров А.П.", "number": "2", "date": "2023-09-28"},
            {"name": "Серебренникова А.В.", "number": "1", "date": "2023-09-29"},
        ],
    },
    {
        "category": "OC-2",
        "title": "Накладная на внутреннее перемещение монитора",
        "id": "54663123",
        "date": "2023-09-15",
        "statusDate": "2023-09-17",
        "status": "accept",
        "author": "Иванов С.А.",
        "route": [
            {"name": "Петров А.П.", "number": "2", "date": "2023-09-16"},
            {"name": "Серебренникова А.В.", "number": "1", "date": "2023-09-17"},
        ],
    },
    {
        "category": "OC-2",
        "title": "Накладная на внутреннее перемещение ноутбука",
        "id": "54723243",
        "date": "2023-09-26",
        "statusDate": "2023-09-26",
        "status": "reject",
        "author": "Иванов С.А.",
        "route": [
            {"name": "Серебренникова А.В.", "number": "1", "date": "2023-09-26"},
            {"name": "Иванов А.А.", "number": "3", "date": "2023-09-26"},
        ],
    },
    {
        "category": "OC-2",
        "title": "Накладная на внутреннее перемещение клавиатуры",
        "id": "64696005",
        "date": "2023-08-25",
        "statusDate": "2023-09-05",
        "status": "reject",
        "author": "Иванов С.А.",
        "route": [
            {"name": "Петров А.П.", "number": "2", "date": "2023-09-01"},
            {"name": "Серебренникова А.В.", "number": "1", "date": "2023-09-03"},
        ],
    },
    {
        "category": "OC-2",
        "title": "Накладная на внутреннее перемещение вазы",
        "id": "64697005",
        "date": "2023-08-25",
        "statusDate": "2023-07-15",
        "status": "accept",
        "author": "Иванов С.А.",
        "route": [
            {"name": "Серебренникова А.В.", "number": "1", "date": "2023-07-18"},
            {"name": "Петров А.П.", "number": "2", "date": "2023-07-18"},
        ],
    },
]


def get_db():
    db = getattr(g, "_database", None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, "_database", None)
    if db is not None:
        db.close()


def has_no_empty_params(rule):
    defaults = rule.defaults if rule.defaults is not None else ()
    arguments = rule.arguments if rule.arguments is not None else ()
    return len(defaults) >= len(arguments)


### Документы для подписания
@app.route("/", methods=["GET"])
def index():
    import urllib

    output = []
    for rule in app.url_map.iter_rules():

        options = {}
        for arg in rule.arguments:
            options[arg] = "[{0}]".format(arg)

        methods = ",".join(rule.methods)
        url = url_for(rule.endpoint, **options)
        line = urllib.parse.unquote(
            "{:50s} {:20s} {}".format(rule.endpoint, methods, url)
        )
        output.append(line)

    return output


### Эндпоинт для документов
@app.route("/docs", methods=["GET"])
def docs():
    # doc = requests.get("http://b3da.sbermock.sigma.sbrf.ru/docs").json()
    doc = mock
    return json.dumps(doc, ensure_ascii=False, sort_keys="statusDate")


@app.route("/docs/<id>", methods=["GET"])
def doc(id=1):
    # doc = requests.get("http://b3da.sbermock.sigma.sbrf.ru/docs").json()
    doc = mock
    con = get_db()
    cur = con.cursor()
    flag = cur.execute(
        """
            SELECT checked FROM DocStat WHERE doc_id = ?
        """,
        (id,),
    ).fetchone()
    if flag is None:
        cur.execute(
            """
                INSERT INTO DocStat (doc_id, checked) VALUES (?, 1)
            """,
            (id,),
        )
        con.commit()
        flag = False
    for i in doc:
        if str(i["id"]) == id:
            i["seenBefore"] = flag

            return json.dumps(i, ensure_ascii=False, sort_keys="statusDate")


@app.route("/login", methods=["POST"])
def login():
    usr = request.get_json()
    cur = get_db().cursor()
    usr = cur.execute(
        """
                    SELECT id, name, surname, coins FROM Users WHERE username = ? and pass = ?
                """,
        (usr["username"], usr["password"]),
    ).fetchone()
    if usr is not None:

        return json.dumps(
            {
                "succ": 1,
                "id": usr[0],
                "name": usr[1],
                "surname": usr[2],
                "coins": usr[3],
            },
            ensure_ascii=False,
        )
    else:

        return json.dumps({"succ": 0}, ensure_ascii=False)


@app.route("/get_user/<id>", methods=["GET"])
def stats(id=1):
    cur = get_db().cursor()
    usr = cur.execute(
        """
            SELECT id, name, surname, coins, exp, level, job FROM Users WHERE id = ?
        """,
        (id,),
    ).fetchone()
    # doc = requests.get("http://b3da.sbermock.sigma.sbrf.ru/docs").json()
    doc = mock
    new = len(doc)
    accept = 0
    reject = 0
    week_ago = (
        (datetime.datetime.today() - datetime.timedelta(days=7))
        .date()
        .strftime("%Y-%m-%d")
    )
    weekResult = 0
    pastDeadline = 0
    product_days = {}

    for i in doc:
        if i["status"] == "accept":
            accept += 1
            if i["statusDate"] not in product_days:
                product_days[i["statusDate"]] = 1
            else:
                product_days[i["statusDate"]] += 1
        elif i["status"] == "reject":
            reject += 1
            if i["statusDate"] not in product_days:
                product_days[i["statusDate"]] = 1
            else:
                product_days[i["statusDate"]] += 1
        if i["status"] != "new" and i["statusDate"] > week_ago:
            weekResult += 1
        if i["status"] == "new" and i[
            "statusDate"
        ] > datetime.datetime.today().date().strftime("%Y-%m-%d"):
            pastDeadline += 1

    m = 0
    day = None

    for i in product_days:
        if product_days[i] > m:
            m = product_days[i]
            day = i

    if usr is not None:

        return json.dumps(
            {
                "succ": 1,
                "id": usr[0],
                "name": usr[1],
                "surname": usr[2],
                "coins": usr[3],
                "xp": usr[4],
                "lvl": usr[5],
                "new": new,
                "accept": accept,
                "reject": reject,
                "weekResult": weekResult,
                "pastDeadline": pastDeadline,
                "job": usr[6],
                "productDay": {
                    "day": day,
                    "signed": m,
                },
            },
            ensure_ascii=False,
        )
    else:

        return json.dumps({"succ": 0}, ensure_ascii=False)


@app.route("/sign/", methods=["POST", "GET"])
def sign():
    doc = request.args
    logger.info(doc)
    for i in range(len(mock)):
        if mock[i]["id"] == doc["docId"]:
            mock[i]["status"] = doc["status"]
            mock[i]["statusDate"] = (
                datetime.datetime.today().date().strftime("%Y-%m-%d")
            )
    return Response(status=200)


@app.route("/new_achievement/", methods=["POST"])
def new_achievement():
    ach = request.get_json()
    con = get_db()
    cur = con.cursor()
    cur.execute(
        """
                INSERT INTO UsrAch_link (ach_id, usr_id) VALUES (?, 1)
            """,
        (ach["uid"], ach["aid"]),
    )
    con.commit()

    return Response(status=200)


@app.route("/get_achievements/<id>", methods=["GET"])
def achievements(id=1):
    cur = get_db().cursor()
    links = cur.execute(
        """
            SELECT ach_id FROM UsrAch_link WHERE usr_id = ?
        """,
        (id,),
    ).fetchall()
    result = []
    for i in links:
        ach = cur.execute(
            """
            SELECT * FROM Achievements WHERE id = ?
        """,
            (id,),
        ).fetchone()

        usr = cur.execute(
            """
            SELECT usr_id FROM UsrAch_link WHERE ach_id = ?
        """,
            (i[0],),
        ).fetchall()

        all_usr = cur.execute(
            """
            SELECT id FROM Users
        """,
        ).fetchall()

        perc = len(usr) / len(all_usr) * 100

        result.append({"title": ach[1], "description": ach[2], "precent": perc})

    return json.dumps(result, ensure_ascii=False)


def create_db_firsttime():
    con = sqlite3.connect(DATABASE)
    cur = con.cursor()
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY,
            username TEXT NOT NULL,
            pass TEXT NOT NULL,
            name TEXT NOT NULL,
            surname TEXT NOT NULL,
            coins INTEGER NOT NULL
        );
    """
    )
    cur.execute(
        """
            CREATE TABLE IF NOT EXISTS Achievements (
                id INTEGER PRIMARY KEY,
                title TEXT NOT NULL,
                description TEXT NOT NULL
            );
        """
    )
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS UsrAch_link (
            id INTEGER PRIMARY KEY,
            usr_id INTEGER,
            ach_id INTEGER
        );
    """
    )
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS DocStat (
            id INTEGER PRIMARY KEY,
            doc_id TEXT NOT NULL,
            checked INTEGER NOT NULL
        );
    """
    )
    con.commit()
    con.close()


def main():
    if not os.path.isfile("db.sqlite3"):
        create_db_firsttime()

    app.config["JSON_AS_ASCII"] = False
    app.run(host="0.0.0.0", port=5000, debug=True)


if __name__ == "__main__":
    main()
