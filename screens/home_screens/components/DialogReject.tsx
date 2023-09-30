import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from "react-native";

const DialogReject = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState<string>("");

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStyle_3}>Отклонение документа</Text>
            <Text style={styles.textStyle_2}>Пожалуйста, укажите причину</Text>
            <View
              style={{
                borderColor: "#949494",
                borderRadius: 10,
                borderWidth: 1,
                width: 220,
              }}
            >
              <TextInput
                editable
                multiline
                numberOfLines={4}
                placeholder="Текст"
                maxLength={40}
                onChangeText={(text) => setValue(text)}
                value={value}
                style={{ padding: 10, borderColor: "#000" }}
              />
            </View>
            <View style={styles.flex}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyleModal}>Отменить</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyleModal}>Отправить</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Отклонить</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 15,
  },
  flex: {
    flexDirection: "row",
    gap: 6,
  },
  button: {
    padding: 13,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#2196F3",
    borderRadius: 10,
  },
  buttonOpen: {
    backgroundColor: "#fff",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "#DB0D60",
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyle_2: {
    color: "#333F48",
    fontWeight: "normal",
    textAlign: "center",
  },
  textStyle_3: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyleModal: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default DialogReject;
