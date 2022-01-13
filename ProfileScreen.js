
// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button ,ScrollView,Image,ImageBackground,TouchableOpacity} from 'react-native';
import firebase from './database/firebase';
const image = require('./img/background.jpg');

export default class ProfileScreen extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      email: firebase.auth().currentUser.email,
      password: firebase.auth().currentUser.password,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <ImageBackground source={image} style={styles.image}>
        <ScrollView style={styles.container}>
        <Image 
            source={
              require('./img/login.png')
            } style ={styles.image2}
            />
        <Text style = {styles.text4}>
          Name Complete : </Text>
          <Text style = {styles.textStyle}>{this.state.displayName} </Text>
          <Text style = {styles.text4}>Email :</Text>
          <Text style = {styles.textStyle}>{this.state.email}</Text>
          <Text style = {styles.text4}>Mot de passe : </Text>
          <Text style = {styles.text5}>******{this.state.password}</Text>
          <View       
            style={{
            flexDirection: "row",
            height: 100,
            padding: 20
      }}>     
            
            <TouchableOpacity onPress={() => this.signOut()}
               >
              <Image source={require('./img/logout.jpg')} style={styles.image4}  />
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
    flexDirection: "column",

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
    color:'yellow',
    fontSize: 20,
    marginLeft:50,
  },
  image2:{  
    width:150,
    height:150,
    marginLeft:130,
    marginTop:20,
    marginBottom:20,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  text4:{  
    color:'white',
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:50,
    
  },
  text5:{  
    color:'white',
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:50,
    
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
  image4:{
    width:50,
    height:50,
    marginLeft:300,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
});