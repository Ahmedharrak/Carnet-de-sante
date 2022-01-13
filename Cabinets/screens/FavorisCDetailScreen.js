import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View,ImageBackground,Text } from 'react-native';
import firebase from '../database/firebaseDb';
import { Image } from 'react-native-elements';
const image = require('../img/background.jpg');
class FavorisCDetailScreen extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      image: '', 
      location: '', 
      telephone: '',
      desc: '',
      isLoading: true
    };
  }
 
  componentDidMount() {
    const dbRef = firebase.firestore().collection('FavorisC').doc(this.props.route.params.cabinetskey)
    dbRef.get().then((res) => {
      if (res.exists) {
        const Cabinets = res.data();
        this.setState({
          key: res.id,
          name: Cabinets.name,
          image: Cabinets.image, location: Cabinets.location, telephone: Cabinets.telephone, desc: Cabinets.desc,
          isLoading: false
        });
      } else {
        console.log("Document does not exist!");
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  deleteUser() {
    const dbRef = firebase.firestore().collection('FavorisC').doc(this.props.route.params.cabinetskey)
      dbRef.delete().then((res) => {
          console.log('Item removed from database')
          this.props.navigation.navigate('Cabinets');
      })
  }

  openTwoButtonAlert=()=>{
    Alert.alert(
      'Delete Favoris',
      'Are you sure?',
      [
        {text: 'Yes', onPress: () => this.deleteUser()},
        {text: 'No', onPress: () => console.log('No item was removed'), style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    );
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
      <ImageBackground source={image} style={styles.image}>
      <ScrollView style={styles.container}>
          <View style={styles.inputGroup}>
             <Image
                source={{ uri: this.state.image }}
                style={{ width: 200, height: 200,marginLeft:30,marginTop:10,}}
              />
            </View>
        <View style={styles.inputGroup}>
        <Text style={{ 
          marginLeft:30,marginTop:10,color:'yellow',fontSize: 20,  }}>Name :</Text>
          <TextInput
            style={{ marginLeft:30,fontSize: 14,color : "white" }}
              placeholder={'Name'}
              value={this.state.name}
              onChangeText={(val) => this.inputValueUpdate(val, 'name')}
              editable={false} selectTextOnFocus={false}
          />
        </View>
        <View style={styles.inputGroup}>
        <Text style={{ 
          marginLeft:30,marginTop:10,color:'yellow',fontSize: 20,  }}>Adresse :</Text>
          <TextInput
              style={{ marginLeft:30,fontSize: 14,color : "white" }}
              placeholder={'desc'}
              value={this.state.desc}
              onChangeText={(val) => this.inputValueUpdate(val, 'desc')}
              editable={false} selectTextOnFocus={false}
          />
        </View>
        <View style={styles.inputGroup}>
        <Text style={{ 
          marginLeft:30,marginTop:10,color:'yellow',fontSize: 20,  }}>Numero de Telephone :</Text>
          <TextInput
          style={{ marginLeft:30,fontSize: 20,color : "white",marginBottom:20 }}
              placeholder={'Mobile'}
              value={this.state.telephone}
              onChangeText={(val) => this.inputValueUpdate(val, 'telephone')}
              editable={false} selectTextOnFocus={false}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Supprimer a Favoris'
            onPress={() => this.openTwoButtonAlert()} 
            color="#E37399"
          />
        </View>
      </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
   
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginBottom: 7, 
  }
})

export default FavorisCDetailScreen;