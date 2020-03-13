import React from 'react';
import {View,Text, StyleSheet, Image, ScrollView} from 'react-native';

//função "principal"
const App = () => {
  return (
    <ScrollView>
     
        <View style={styles.container}>
          <Image style={styles.img} source= {require("./assets/camera.png")}/>
          <Text style={styles.label}>Instagrau</Text>
          <Image style={styles.img} source= {require("./assets/ig.png")}/>
          <Image style={styles.img} source= {require("./assets/send.png")}/>
      </View>
      <View style={styles.container2}>
          <Image style={styles.img2} source= {require("./assets/user.png")}/>
          <Text style={styles.label2}>Fulado100%</Text>
      </View>
          <Image  source= {require("./assets/deathstar.jpg")}/>

          <View style={styles.container2}>
          <Image style={styles.img4} source= {require("./assets/heart.png")}/>
          <Image style={styles.img4} source= {require("./assets/chat.png")}/>
          <Image style={styles.img4} source= {require("./assets/send.png")}/>
          <Image style={styles.img3} source= {require("./assets/tag.png")}/>
          
      </View>
      <Text style={styles.label3} >226,130 likes</Text>
      <Text style={styles.label4} >Lorem Ipsum é simplesmente uma simulação de texto da indústria 
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor 
        desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</Text>
    </ScrollView>  
    
  );
};
//criar a estilização da página
const styles = StyleSheet.create({
  container:{
    backgroundColor: "#F8F7F6",
    flex:1,
    flexDirection: "row",
    paddingTop: 35,
    paddingBottom: 20,
    
   
  },
  container2:{
    flex:2,
    flexDirection: "row",
    paddingTop: 15,
    marginBottom: 10,
   
  },
  label:{
    fontSize: 25,
    
    fontWeight: "bold",
    fontFamily: "serif", 
    paddingLeft: 50,
    paddingEnd: 50,
    fontStyle: "italic",
    
  },
  label2:{
    fontSize: 20,    
    paddingTop:18,
    marginLeft: 5
  },
  label3:{
    marginLeft: 10,
    fontWeight: "bold",
  },
  label4:{
    marginLeft: 10,
    paddingTop: 10
  },
  img : {
    marginLeft: 10,
  },
  img2 : {
    width:50,
    height: 50,
    marginLeft: 5
  },
  img3 : {
   marginLeft:200
  },
  img4 : {
   marginLeft:10,   
  }
});
export default App;
