import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style/MainStyle';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Principal from './screens/Principal';
import Cadastro from './screens/Cadastro';
import Inicio from './screens/Inicio';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Açaí Delivery" component={Inicio}
       options={{
        headerStyle: {
          backgroundColor: '#9B59B6', //header cor amarela
        },
        headerTintColor: '#FCE35D', // setinha de voltar cor amarela
         headerTitleStyle: {
           fontWeight: 'bold', //texto que está no header
         },
      }}
      />
      <Stack.Screen name="Login" component={Login}
       options={{
         headerStyle: {
           backgroundColor: '#9B59B6' //header cor roxa
         },
         headerTintColor: '#FCE35D', // setinha de voltar cor amarela
          headerTitleStyle: {
            fontWeight: 'bold', //texto que está no header
          },
       }}
       />
      <Stack.Screen name="Principal" component={Principal}/>
      <Stack.Screen name="Cadastro" component={Cadastro} 
      options={{
        headerStyle: {
          backgroundColor: '#9B59B6' //header cor roxa
        },
        headerTintColor: '#FCE35D', // setinha de voltar cor amarela
         headerTitleStyle: {
           fontWeight: 'bold', //texto que está no header
         },
      }}
      />
    </Stack.Navigator>
  );
  
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );  
}




