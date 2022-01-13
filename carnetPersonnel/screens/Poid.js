import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ActivityIndicator,ScrollView, ImageBackground, Image, Picker, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const image = require('../img/background.jpg');


  export default class Poid extends Component {
    render(){
  return (
    <ImageBackground source={image} style={styles.image}>
  <ScrollView style={styles.container}>
            <Text style={styles.text}>Poid et mesures du corps </Text>
            <View       
            style={{
            flexDirection: "row",
            height: 100,
            padding: 20
      }}
       >
            <Image source={require('../../img/plus.png')} style={styles.image1}  />
              <TouchableOpacity onPress={() => this.props.navigation.navigate('AddPoidScreen')}
              style={styles.button1}
            >
              <Text style={{color:'red'}}>Ajouter votre Poid</Text>
            </TouchableOpacity>
      </View> 
      <View       
            style={{
            flexDirection: "row",
            height: 100,
            padding: 20
      }}
       >
            <Image source={require('../../img/search.png')} style={styles.image1}  />
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ListPoid')}
              style={styles.button1}
            >
              <Text style={{color:'red'}}>Voila la liste</Text>
              <Text style={{color:'red'}}>de votre Poids</Text>
            </TouchableOpacity>
      </View> 
      </ScrollView>
      </ImageBackground>
   );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "yellow",
      fontSize: 30,
      fontWeight: "bold",
      textAlign:'center',
      marginTop:30,
      marginBottom:30
      
    },
    button1:{
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
    button2:{
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
      width:50,
      height:50,
      marginLeft:20,
      borderTopLeftRadius: 70,
      borderTopRightRadius: 70,
      borderBottomLeftRadius: 70,
      borderBottomRightRadius: 70,
      
    },
    button8:{
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      width:50,
      height:50,
      marginLeft:250,
      borderTopLeftRadius: 70,
      borderTopRightRadius: 70,
      borderBottomLeftRadius: 70,
      borderBottomRightRadius: 70,
      
      
    },
    image1:{
      width:50,
      height:50,
      marginLeft:40,
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
    image7:{},
  
  
  });