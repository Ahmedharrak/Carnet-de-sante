import React , { Component }from "react";
import { ImageBackground, StyleSheet, Text, View,Image,TouchableOpacity, ScrollView  } from "react-native";

const image = require('./img/background.jpg');

  export default class Carnet extends Component {
   
    render(){
  return (
  <ScrollView style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    <View       
        style={{
        flexDirection: "row",
        height:90,
        padding: 20
      }}
      >
        <Image source={require('./img/Médicaments.png')} style={styles.image1}  />
          <TouchableOpacity
          style={styles.button3} onPress={() => this.props.navigation.navigate('Medicaments')}
        >
          <Text style={{color:'red'}}>Médicaments</Text>
        </TouchableOpacity>
      </View>
    <View       
        style={{
        flexDirection: "row",
        
        padding: 20
      }}
      >   
        <Image source={require('./img/Rendez-vous.jpg')} style={styles.image11}  />
        <TouchableOpacity
          style={styles.button13} onPress={() => this.props.navigation.navigate('Rendez')}
        >
          <Text style={{color:'red'}}>Rendez-vous</Text>
        </TouchableOpacity>  
      </View>        
        <View       
        style={{
        flexDirection: "row",
        height:90,
        padding: 20
      }}
      >
        <Image source={require('./img/Poid.jpg')} style={styles.image1}  />
          <TouchableOpacity
          style={styles.button3} onPress={() => this.props.navigation.navigate('Poid')}
        >
          <Text style={{color:'red'}}>Poid et mesures du corps</Text>
        </TouchableOpacity>
      </View>
      
      
      </ImageBackground>
      </ScrollView>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  image: {
    flex: 1,
    resizeMode: "cover", 
    height:1000 
  },
  text: {
    color: "yellow",
    fontSize: 30,
    fontWeight: "bold",
    textAlign:'center',
    marginBottom:30    
  },

  button3:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    marginBottom:30,
  },
  button4:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button5:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button6:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button7:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button8:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button9:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button10:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button11:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button12:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button13:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button14:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button15:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button16:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image1:{
    width:50,
    height:50,
    marginLeft:40,
    marginBottom:300,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70, 
  },
  image2:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image3:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image4:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image5:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image6:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image7:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image8:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image9:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image10:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image11:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image12:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image13:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image14:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },


});

