import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator,ImageBackground,Image,TouchableOpacity } from 'react-native';
import firebase from '../database/firebase';
const image = require('../img/background.jpg');

export default class Login extends Component {
  
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
        <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.text}>SAHTKOM</Text>
          <Image 
            source={
              require('../img/login.png')
            } style ={styles.image2}
            />
        <Text style={styles.text1}>Email</Text> 
        <TextInput
          style={styles.inputStyle}
          
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <Text style={styles.text2}>Mot de passe</Text>
        <TextInput
          style={styles.inputStyle}
          
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <TouchableOpacity  onPress={() => this.userLogin()}
          style={styles.button1} 
          >
        <Text style={{color:'white'}} >Login</Text>
        </TouchableOpacity> 
        

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Signup')}>
          Vous n'avez pas de compte? Cliquez ici pour vous inscrire
        </Text>  
         
        <Text 
          style={styles.text4}
          onPress={() => this.props.navigation.navigate('info')}>
          Informations de compte oubliées?
        </Text> 
        </ImageBackground>                      
      </View>
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
    color:'white',
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:100,
    
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
});