import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Inicio({navigation}) {

const cadastrar = () => {
    // navega para a tela e contém o botão de voltar
    navigation.navigate("Cadastro")
}

const entrar = () => {
    // navega para a tela e contém o botão de voltar
    navigation.navigate("Login")
}

  return (
    <View style={styles.inicio}>
     <View style={styles.logo}>
    <Image 
      source={require("../assets/logo.png")}
      style={{
      resizeMode: "contain",
      height: 200,
      width: 200
      }}
    />
      <Text style={styles.other} h4>Primeiro Acesso?</Text> 
        <Button
          icon={
            <Icon
              name=""
              size={15}
              color="white"
            />
          }
          title="Cadastre-se"
          buttonStyle={specificStyle.button} //aplicando estilo no botão
          onPress={() => cadastrar()}
        />
        <Text style={styles.other} h4>ou</Text>
        <Button 
          icon={
            <Icon
              name=""
              size={15}
              color="white"
            />
          }
          title="Entrar"
          buttonStyle={specificStyle.button} //applicando estilo no botão
          onPress={() => entrar()}
        />
    </View>
    </View>
  );
}

const specificStyle = StyleSheet.create({
    button: {
       width: 150,
       //marginTop: 10,
       backgroundColor: "#FCE35D",
       borderRadius: 20,
    }
  })