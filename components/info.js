import React, { Component } from 'react';
import { StyleSheet, Text, View,ScrollView, TextInput, Button, Alert, ActivityIndicator,ImageBackground,Image,TouchableOpacity } from 'react-native';
import firebase from '../database/firebase';
const image = require('../img/background.jpg');

export default class info extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Accueil')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
        <ScrollView style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.text}>SAHTKOM</Text>
          <Image 
            source={
              require('../img/login.png')
            } style ={styles.image2}
            />
        <Text style={styles.text6}>Informations Complete :</Text>     
        <Text style={styles.text5}>Groupe 15 : Les fondateurs</Text> 
        <Text style={styles.text5}>HARRAK Ahmed(MQL)</Text>
        <Text style={styles.text5}>GHAILANI Saad (MQL)</Text>
        <Text style={styles.text5}>MEHDI Rabie (MQL)</Text>
        <Text style={styles.text4}>Projet React Native – Carnet de sante </Text>
        <Text style={styles.text4}>Le carnet de santé est un document retraçant les
            informations médicales liées à une personne, notamment
            durant son enfance. Certaines informations peuvent alimenter
            le livret d'informations santé.
            </Text>
        <Text style={styles.text4}>Les besoins de ce projet consistent à :</Text>
        <Text style={styles.text4}>-Stockez les données client importantes (médicale,personnel, …).</Text>
        <Text style={styles.text4}>-Gestion de rendez-vous.</Text>
        <Text style={styles.text4}>-Créer son propre compte.</Text>
        <Text style={styles.text4}>-Avoir la liste des Hôpitaux, Laboratoires, Services d’agence et Cabinets, disponibles pour chaque ville.</Text>
        <Text style={styles.text7}>-Avoir la liste des pharmaceutique etc…</Text>       
        </ImageBackground>                      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  inputStyle: {
    height: 40, 
    width:'60%',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft:100,
    marginBottom:20
  },
  loginText: {
    color:'yellow',
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:100,
    marginBottom:100
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  text3:{  
    color:'yellow',
    fontSize: 20,
    fontWeight: "bold" ,
    marginLeft:100,
    marginBottom:20
  },
  text4:{  
    color:'black',
    fontSize: 16,
    fontWeight: "bold",
    marginLeft:30,
    marginTop:5,
    marginBottom:10
  },
  text5:{  
    color:'yellow',
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:30,
    marginBottom:5,
    marginTop:5,
  },
  text7:{
    color:'black',
    fontSize: 16,
    fontWeight: "bold",
    marginLeft:30,
    marginTop:5,
    marginBottom:100,
    
  },
  text6:{  
    color:'black',
    fontSize: 22,
    fontWeight: "bold",
    marginLeft:30,
    marginBottom:5,
    marginTop:5,
  },
  text1:{  
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:100,
    marginBottom:20
  },
  text2:{  
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:100,
    marginBottom:20
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  image2:{
    
    width:150,
    height:150,
    marginLeft:130,
    marginBottom:20,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    
  },
  button1:{
    alignItems: "center",
    backgroundColor: "red",
    padding: 5,
    width:'60%',
    height:40,
    marginLeft:100,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    marginBottom:20,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold" ,
    textAlign:'center',
    marginBottom:20
    
  },
  button3:{
    alignItems: "center",
    backgroundColor: "red",
    padding: 5,
    width:'60%',
    height:40,
    marginLeft:90,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
});