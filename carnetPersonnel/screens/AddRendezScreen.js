import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View ,Text,Picker,} from 'react-native';
import firebase from '../../database/firebaseDb';
import { TextInputMask } from 'react-native-masked-text'
const image = require('../../img/background.jpg');

class AddRendezScreen extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('Rendez');
    this.state = {
        CIN:'',
        Date:'',
        Institution:'',
        Interet:'',
        Nature:'',
        Name: '',
        location: '',
        Telephone: '',
      isLoading: false
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  storeUser() {
    if(this.state.Name === ''){
     alert('Fill at least your name!')
    } else {
      this.setState({
        isLoading: true,
      });      
      this.dbRef.add({
        CIN:this.state.CIN,
        Date:this.state.Date,
        Institution:this.state.Institution,
        Interet:this.state.Interet,
        Nature:this.state.Nature,
        Name: this.state.Name,
        location: this.state.location,
        Telephone: this.state.Telephone,
      }).then((res) => {
        this.setState({
            CIN:'',
            Date:'',
            Institution:'',
            Interet:'',
            Nature:'',
            Name: '',
            location: '',
            Telephone: '',
          isLoading: false,
        });
        this.props.navigation.navigate('Rendez')
      })
      .catch((err) => {
        console.error("Error found: ", err);
        this.setState({
          isLoading: false,
        });
      });
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
          <View style={styles.inputGroup}>
          <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Numero de CIN'}
              value={this.state.CIN}
              onChangeText={(val) => this.inputValueUpdate(val, 'CIN')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Name Complete'}
              value={this.state.Name}
              onChangeText={(val) => this.inputValueUpdate(val, 'Name')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              multiline={true}
              numberOfLines={4}
              keyboardType={'numeric'}
              placeholder={'Numero de Telephone'}
              value={this.state.Telephone}
              onChangeText={(val) => this.inputValueUpdate(val, 'Telephone')}
          />
        </View>
        <View style={styles.inputGroup}>
        <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Saisir date DD-MM-YYYY'}
              value={this.state.Date}
              onChangeText={(val) => this.inputValueUpdate(val, 'Date')}
              options={{
                format: 'DD-MM-YYYY'
              }}
        />  
        </View>
        <View style={styles.inputGroup}>
        <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Votre City'}
              value={this.state.location}
              onChangeText={(val) => this.inputValueUpdate(val, 'location')}
          />
        </View>
        
        <View style={styles.inputGroup}>
        <Text>Choisir Votre Intérêt(Chirurgie générale,Avant l'anesthésie,cardiologie,dentiste,Gynécologie et nouveau-nés,les maladies du sang,Chirurgie de fracture)</Text>
          <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Intérêt'}
              value={this.state.Interet}
              onChangeText={(val) => this.inputValueUpdate(val, 'Interet')}
          />
        </View>      
      <View style={styles.button}>
        <Picker       
        style={styles.picker2}>
        <Picker.Item label="Intérêt" value="" />
        <Picker.Item label="avis médical" value={this.state.Nature} />
      </Picker>
      </View>
      <View style={styles.button}>
          <Button
            title='Enregister'
            onPress={() => this.storeUser()} 
            color="#19AC52"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AddRendezScreen;