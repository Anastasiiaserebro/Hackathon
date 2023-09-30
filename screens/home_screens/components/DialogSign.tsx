import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { API, RootStackParamList } from '../../../App';
import { useQuery } from '@tanstack/react-query';


const DialogSign= () => {
  const [modalVisible, setModalVisible] = useState(false);

  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const click = () => {
    setModalVisible(!modalVisible)
   
  
    setTimeout(() =>  navigate("Home"), 500)

  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView} >
          <Text style={styles.textStyleModal}>Документ подписан</Text>
          <Text style={styles.textStyle_2}>Получите 20 золотых монет</Text>
 
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => click()}>
                <Text style={styles.textStyle}>Ура!</Text>  
              </Pressable>
        
            
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Подписать</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap:15,
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
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyle_2:{
    color: '#333F48',
    fontWeight:'normal',
    textAlign: 'center',
  },
  textStyleModal: {
    color: '#000',   
    fontSize:18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default DialogSign;