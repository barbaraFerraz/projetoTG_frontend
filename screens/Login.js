import { useNavigationBuilder } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
}

  return (
    <View style={styles.container}>
      <Text h3>Login</Text> 
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
          onPress={() => entrar()}
        />
        <Text h5 style={styles.other}>Quer ter benefícios?</Text>
        <Button
          icon={
            <Icon
              name=""
              size={15}
              color="white"
            />
          }
          title="Cadastre-se"
        />
    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  other: {
    marginVertical: 10, //margin é espaçamento externo
    padding: 20, //padding é espaçamento interno
  },
});
