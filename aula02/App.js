import React from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';

//função "principal"
const App = () => {
  return (
    //linguagem JSX
    <View style={styles.container}>
      <Text style={styles.label}>Ola mundo</Text>
      <Image style={styles.img} source= {require("./assets/icon.png")}/>
    </View>
  );
};
//criar a estilização da página
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#aadd",
    flexDirection: "column",
    // justifyContent: "center"
    alignItems: "center"
  },
  label:{
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "serif",
    color: "#eb4034",
    fontStyle: "italic",
    
    
  },
  img : {
    width: 200,
    height: 200
  }
});
export default App;
