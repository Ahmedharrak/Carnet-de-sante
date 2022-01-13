import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View ,Text,Picker,} from 'react-native';
import firebase from '../../database/firebaseDb';
import { TextInputMask } from 'react-native-masked-text'
const image = require('../../img/background.jpg');

class AddPoidScreen extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('Poid');
    this.state = {
        hanches:'',
        poitrine:'',
        ventre:'',
        bras:'',
        cuisses:'',
        taille: '',
        date: '',
      isLoading: false
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  storeUser() {
    if(this.state.date === ''){
     alert('Fill at least your date!')
    } else {
      this.setState({
        isLoading: true,
      });      
      this.dbRef.add({
        hanches:this.state.hanches,
        poitrine:this.state.poitrine,
        ventre:this.state.ventre,
        cuisses:this.state.cuisses,
        bras:this.state.bras,
        taille: this.state.taille,
        date: this.state.date,
      }).then((res) => {
        this.setState({
            hanches:'',
            poitrine:'',
            ventre:'',
            bras:'',
            cuisses:'',
            taille: '',
            date: '',
          isLoading: false,
        });
        this.props.navigation.navigate('Poid')
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
              placeholder={'Votre hanches'}
              value={this.state.hanches}
              onChangeText={(val) => this.inputValueUpdate(val, 'hanches')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Votre poitrine'}
              value={this.state.poitrine}
              onChangeText={(val) => this.inputValueUpdate(val, 'poitrine')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Votre de ventre'}
              value={this.state.ventre}
              onChangeText={(val) => this.inputValueUpdate(val, 'ventre')}
          />
        </View>
        <View style={styles.inputGroup}>
        <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Saisir date DD-MM-YYYY'}
              value={this.state.date}
              onChangeText={(val) => this.inputValueUpdate(val, 'date')}
              options={{
                format: 'DD-MM-YYYY'
              }}
        />  
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Votre taille (cm)'}
              value={this.state.taille}
              onChangeText={(val) => this.inputValueUpdate(val, 'taille')}
          />
        </View>  
        <View style={styles.inputGroup}>
          <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Votre bras (kg)'}
              value={this.state.bras}
              onChangeText={(val) => this.inputValueUpdate(val, 'bras')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Votre cuisses (kg)'}
              value={this.state.cuisses}
              onChangeText={(val) => this.inputValueUpdate(val, 'cuisses')}
          />
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
  },
  button:{
      marginBottom:100
  }
})

export default AddPoidScreen;