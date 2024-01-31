import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import style from "./style";

export default function ButtonApp(props: { texto: string }) {
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <View style={style.button}>
      <TouchableOpacity onPress={toggleModal}>
        <Text style={style.text}>{props.texto}</Text>
      </TouchableOpacity>
      <Modal visible={visible} animationType="slide" style={{ flex: 1 , alignItems: 'center', justifyContent: 'center' , width: '50%' , height: '50%' , backgroundColor: 'green' }}>
        <View style={{ padding: 20 }}>
          <Text>Modal</Text>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <ButtonAppClass texto={"Fechar"} />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const ButtonAppClass = (props: { texto: string }) => {
  return (
    <View style={style.button}>
      <Text style={style.text}>{props.texto}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export { ButtonAppClass };
