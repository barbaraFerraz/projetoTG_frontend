import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Input, CheckBox } from 'react-native-elements';
//import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Cadastro({navigation}) {

    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [isSelected, setSelected] = useState(false) // por padrão o checkbox está desmarcado
    const [errorNome,setErrorNome] = useState(null)
    const [errorEmail,setErrorEmail] = useState(null)
    const [errorSenha,setErrorSenha] = useState(null)
    const [errorTelefone,setErrorTelefone] = useState(null)
    
    // let telefoneField = null

    const validar = () => {
      let error = false
      setErrorEmail(null) //quando validar a mensagem de erro some
      setErrorSenha(null) //quando validar a mensagem de erro some

      // Expressão regular que verifica se o que foi digitado é realmente um email
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) { //se não validar a expressão regular acima
          setErrorEmail("Preencha seu email corretamente")
          error = true
        }
        if (senha == null) { //se o campo estiver vazio
          setErrorSenha("Preencha sua senha corretamente")
          error = true
        }
        if(telefone == null){
          setErrorTelefone("Preencha seu telefone corretamente")
          error = true
        }
        return !error
    }
    
    const salvar = () => {
        if(validar()) {//Somente irá salvar o cadastro se validar
             alert("Salvo com sucesso!")
        }
    }

  return (
    <View style={styles.container}>
      <Text h3>Cadastre-se</Text> 
      <Input
          placeholder="Nome"
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          onChangeText={value => setNome(value)}
          errorMessage={errorNome} //mensagem de erro
        />
      <Input
          placeholder="E-mail"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={value => {
            setEmail(value)
            setErrorEmail(null) //quando começar a digitar, a mensagem de erro (do campo vazio) some!
          }}
          keyboardType="email-address"
          errorMessage={errorEmail} //mensagem de erro
        />
        <Input
          placeholder="Senha"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={value => {
            setSenha(value)
            setErrorSenha(null) //quando começar a digitar, a mensagem de erro (do campo vazio) some!
          }}
          secureTextEntry={true}
          errorMessage={errorSenha} //mensagem de erro
        />
         <Input
          placeholder="Telefone"
          leftIcon={{ type: 'font-awesome', name: 'phone' }}
          onChangeText={value => {
            setTelefone(value)
            setErrorTelefone(null) //quando começar a digitar, a mensagem de erro (do campo vazio) some!
          }}
          keyboardType="number-pad"
          errorMessage={errorTelefone} //mensagem de erro
        />
          {/* 
          <View style={styles.containerMask}>
            <TextInputMask 
              placeholder="Telefone"
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99)'
              }}
              value={telefone}
              onChangeText={value => {
                setTelefone(value)
                setErrorTelefone(null)
                }
              }
                keyboardType="phone-pad"
                returnKeyType="done"
                style={styles.maskedInput}
                ref={(ref) => telefoneField = ref}
            />
          </View>
          <Text style={styles.errorMessage}>{errorTelefone}</Text>
            */}
        <CheckBox 
            title = "Eu aceito os termos de uso"
            type="IconType"
            checkedIcon="check" //checkbox pressionado
            uncheckedIcon="square-o" //checkbox não pressionado
            checkedColor="green" //quando pressionado muda para a cor verde
            uncheckedColor="red" //quando não pressionado fica vermelho
            checked={isSelected} //variavel para setar o checkbox
            onPress={() => setSelected(!isSelected)} // ! se estiver false vira true, se estiver true vira false (ao clicar)
        />

        <Button
          icon={
            <Icon
              name="check"
              size={15}
              color="white"
            />
          }
          title="Criar conta"
          buttonStyle={specificStyle.button}
          onPress={() => salvar()}
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


