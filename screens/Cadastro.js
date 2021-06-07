import React, { useState } from 'react';
import { Alert } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Input, CheckBox } from 'react-native-elements';
import {Button as PaperButton, Provider, Dialog, Paragraph, Portal } from 'react-native-paper';
//import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome';
import usuarioService from '../services/UsuarioService';
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
    const [isLoading, setLoading] = useState(false)

    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    const [titulo, setTitulo] = useState(null)
    const [mensagem, setMensagem] = useState(null)
    

    
    // let telefoneField = null

    const validar = () => {
      let error = false
      setErrorEmail(null) //quando validar a mensagem de erro some
      setErrorSenha(null) //quando validar a mensagem de erro some
      setErrorTelefone(null) //quando validar a mensagem o erro some
      setErrorNome(null) //quando validar a mensagem o erro some 

      // Regex que verifica se o que foi digitado é realmente um email
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
          setErrorTelefone("Você se esqueceu de colocar o telefone")
          error = true
        }
        if(nome == null){
          setErrorNome("Você se esqueceu de colocar o nome")
          error = true
        }
        return !error
    }
    
    const salvar = () => {
        if(validar()) {//Somente irá salvar o cadastro se validar
          setLoading(true) //carregando a resposta
          let data = {
               nome: nome,
               email: email,
               senha: senha,
               telefone: telefone
             }
             //Chamando o método cadastrar do usuarioService
             usuarioService.cadastrar(data)
             //se o cadastro der certo entra no then
             .then((response) => {
                setLoading(false) 
                const titulo = (response.data.status) ? "Sucesso" : "Erro"
                setTitulo(titulo)
                setMensagem(response.data.mensagem)
                //Alert.alert(titulo, response.data.mensagem) //Chamando mensagem que está na API
                showDialog()
              })
             //se der errado entra no catch
             .catch((error) => {
                setLoading(false) 
                setTitulo("Erro")
                setMensagem("Houve um erro inesperado")
               // Alert.alert("Erro", "Houve um ero inesperado")
             })
        }
    }

  return (
    <View style={styles.container}>
      <Text h4>Cadastre-se</Text> 
      <Input
          placeholder="Nome"
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          onChangeText={value =>{
           setNome(value)
           setErrorNome(null)
          }}
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

        { isLoading &&
          <Text>Carregando...</Text>

        }

        { !isLoading &&
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
        }
        <Provider>
        <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>{titulo}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{mensagem}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <PaperButton onPress={hideDialog}>OK</PaperButton>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      </Provider>

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


