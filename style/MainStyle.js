import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',

    },
    other: {
        marginVertical: 10, //margin é espaçamento externo
        padding: 8, //padding é espaçamento interno
        color: 'white'
    },
    inicio: {
      flex: 1,
      backgroundColor: "#9B59B6",
    },
    logo: {
      flex: 1,
      alignItems: 'center',
    },
    login: {
      color: "#FCE35D"
    },
    /*
    maskedInput: {
      flexGrow: 1,
      height: 40,
      fontSize: 18,
      borderBottomColor: "#999",
      borderBottomWidht: 1,
      borderStyle: "solid",
      alignSelf: "flex-start"
    },
    containerMask: {
      flexDirection: "row",
      marginBottom: 20,
      marginLeft: 10,
      marginRight: 10,
    }
    */
  });
  
  export default styles