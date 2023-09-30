import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { API, RootStackParamList, queryClient } from "../../../App";
import { useMutation } from "@tanstack/react-query";
import { DialogProps } from "../DocumentDetails";
import LottieView from "lottie-react-native";

const DialogSign: React.FC<DialogProps> = ({ docId }) => {
  const [achievementsModalVisible, setAchievementsModalVisible] =
    useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const click = () => {
    setModalVisible(!modalVisible);
    mutate();
    setAchievementsModalVisible(true);
    // setTimeout(() =>  navigate("Home"), 500)
  };

  const { mutate } = useMutation({
    mutationKey: ["sign/accept"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["docs"] });
    },
    mutationFn: () =>
      API.post("sign", { uid: 1, docId: docId, status: "accept" }),
  });

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
            <Text style={styles.textStyleModal}>Документ подписан</Text>
            <Text style={styles.textStyle_2}>Получите 20 золотых монет</Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={click}
            >
              <Text style={styles.textStyle}>Ок</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={achievementsModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setAchievementsModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView2}>
            <LottieView
              style={{
                marginTop: -90,
                marginBottom: 20,
              }}
              source={require("./animation.json")}
              speed={0.5}
              autoPlay
            />
            <Text style={styles.textStyleModal}>Получено достижение</Text>
            <Text style={styles.textStyle_2}>Согласователь года</Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                navigate("Home");
              }}
            >
              <Text style={styles.textStyle}>Ура!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Подписать</Text>
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
  modalView2: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    paddingTop: 120,
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
  button: {
    padding: 13,
    paddingLeft: 20,
    paddingRight: 20,
    color: "white",
    borderRadius: 10,
  },
  buttonOpen: {
    backgroundColor: "#007AFF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyle_2: {
    color: "#333F48",
    fontWeight: "normal",
    textAlign: "center",
  },
  textStyleModal: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default DialogSign;
