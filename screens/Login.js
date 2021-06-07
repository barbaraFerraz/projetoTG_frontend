import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

const entrar = () => {
    // reset usado quando quer ir para uma tela sem ter o botão de voltar
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
}

const cadastrar = () => {
    // navega para a tela e conté o botão de voltar
    navigation.navigate("Cadastro")
}

  return (
    <View style={styles.container}>
      <Text styles={styles.login}h4>Login</Text> 
      <Input
          placeholder="E-mail"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
        />
        <Input
          placeholder="Senha"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        <Button
          icon={
            <Icon
              name=""
              size={15}
              color="white"
            />
          }
          title="Entrar"
          buttonStyle={specificStyle.button}
          onPress={() => entrar()}
        />
        <Text style={styles.other} h5>Quer ter benefícios?</Text>
        <Button
          icon={
            <Icon
              name=""
              size={15}
              color="white"
            />
          }
          title="Cadastre-se"
          buttonStyle={specificStyle.button}
          onPress={() => cadastrar()}
        />
    </View>
  );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
        backgroundColor: "#fff",
    },
    button: {
      width: 150,
      //marginTop: 10,
      backgroundColor: "#FCE35D",
      borderRadius: 20,
    }
    
  })


