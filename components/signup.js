import React, { Component } from 'react';
import { StyleSheet, Text,ScrollView, View, TextInput, Alert, ActivityIndicator, ImageBackground, Image, Picker, Button, TouchableOpacity } from 'react-native';
import firebase from '../database/firebase';
import { TextInputMask } from 'react-native-masked-text'


const image = require('../img/background.jpg');

export default class Signup extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      phoneNumber:'',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName,
          phoneNumber: this.state.phoneNumber
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: '',
          phoneNumber:''
        })
        this.props.navigation.navigate('Login')
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
        <Image 
            source={
              require('../img/login.png')
            } style ={styles.image2}
            />
        <Picker       
        style={styles.picker1}>
        <Picker.Item label="Femme" value="Femme" />
        <Picker.Item label="Masculin" value="Masculin" />
      </Picker>
      <Picker       
        style={styles.picker2}
      >
        <Picker.Item label="A" value="A" />
        <Picker.Item label="O" value="o" />
        <Picker.Item label="AB" value="AB" />
      </Picker>
      <Picker       
        style={styles.picker3}
      >
        <Picker.Item label="Votre Age" value="" />
        <Picker.Item label="Masculin" value="Masculin" />
      </Picker>
       
        <TextInput
          style={styles.inputStyle}
          placeholder="  Saisir votre Nom Complete ici ..."
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />     
        <TextInputMask
          style={styles.inputStyle}
          placeholder="  Saisir votre Date de naissance ici ...        "
          value={this.state.Date}
          onChangeText={(val) => this.updateInputVal(val, 'Date')}
              type={'datetime'}
              options={{
                format: 'DD-MM-YYYY HH:mm:ss'
              }}
        />  
        
        <TextInput
          style={styles.inputStyle}
          placeholder="  Saisir votre Lieu de naissance ici ...        "
          keyboardType={'email-address'}
          value={this.state.Lieu}
          onChangeText={(val) => this.updateInputVal(val, 'Lieu')}
        />  
        <Picker       
        style={styles.picker4}>
        <Picker.Item label="Celibataire" value="Celibataire" />
        <Picker.Item label="Marie" value="Marie" />
        <Picker.Item label="-" value="-" />
        </Picker>   
        <TextInput
          style={styles.inputStyle}
          placeholder="  Saisir votre Telephone ici ... "
          value={this.state.phoneNumber}
          onChangeText={(val) => this.updateInputVal(val, 'phoneNumber')}
          keyboardType={'numeric'}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="  Saisir votre Email ici ...        "
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
          keyboardType={'email-address'}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="  Saisir mot de passe         "
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <TouchableOpacity onPress={() => this.registerUser()}
        style={styles.button3} >
        <Text style={{color:'white'}}>Inscrire</Text>
         </TouchableOpacity> 
        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
          Déjà enregistré? Cliquez ici pour vous identifier
        </Text> 
        </ImageBackground>                         
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  inputStyle: {
    height: 40, 
    width:'80%',
    marginLeft:40,
    marginBottom:10,
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  loginText: {
    color:'yellow',
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:50,
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
  image: {
    flex: 1,
    resizeMode: "cover",  

    
  },
  image2: {
    width: 100,
    height: 100,
    marginLeft:150,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    alignItems: "center",
    marginTop:2
  },

  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  },
  textInput1:{
    height: 40, 
    width:'80%',
    marginLeft:40,
    marginBottom:10,
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textInput2:{
    height: 40, 
    width:'80%',
    marginLeft:40,
    marginBottom:10,
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textInput3:{
    height: 40, 
    width:'80%',
    borderWidth: 3,
    marginLeft:40,
    marginBottom:10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textInput4:{
    height: 40, 
    width:'80%',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft:40,
    marginBottom:10,
  },
  textInput5:{
    height: 40, 
    width:'80%',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft:40,
    marginBottom:10,
  },
  textInput6:{
    height: 40, 
    width:'80%',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft:40,
    marginBottom:10,
  },
  textInput7:{
    height: 40, 
    width:'80%',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft:40,
    marginBottom:10,
  },
  textInput8:{
    height: 40, 
    width:'80%',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft:40,
    marginBottom:10,
  },
  button:{
    width:'50%',
    height:'50%',
    backgroundColor : '#FFF000'
  },
  button1:{
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
  button2:{
    
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
  picker1:{
    marginLeft:40,
    marginBottom:10,
    width:'83%',
    height:40,color:'white'
  },
  picker2:{
    marginLeft:40,
    marginBottom:10,
    width:'83%',
    height:40,color:'white'
  },
  picker3:{
    marginLeft:40,
    marginBottom:10,
    width:'83%',
    height:40,
    color:'white'
  },
  picker4:{
    marginLeft:40,
    marginBottom:10,
    width:'83%',
    height:40,color:'white'
  },
});