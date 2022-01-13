import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View ,Text} from 'react-native';
import firebase from '../../database/firebaseDb';

class RendezDetailScreen extends Component {

  constructor() {
    super();
    this.state = {
        CIN:'',
        Date:'',
        Institution:'',
        Interet:'',
        Nature:'',
        Name: '',
        location: '',
        Telephone: '',
      isLoading: true
    };
  }
 
  componentDidMount() {
    const dbRef = firebase.firestore().collection('Rendez').doc(this.props.route.params.userkey)
    dbRef.get().then((res) => {
      if (res.exists) {
        const user = res.data();
        this.setState({
          key: res.id,
          CIN:user.CIN,
        Date:user.Date,
        Institution:user.Institution,
        Interet:user.Interet,
        Nature:user.Nature,
        Name: user.Name,
        location: user.location,
        Telephone: user.Telephone,
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

  updateUser() {
    this.setState({
      isLoading: true,
    });
    const updateDBRef = firebase.firestore().collection('Rendez').doc(this.state.key);
    updateDBRef.set({
      CIN:this.state.CIN,
        Date:this.state.Date,
        Institution:this.state.Institution,
        Interet:this.state.Interet,
        Nature:this.state.Nature,
        Name:this.state.Name,
        location: this.state.location,
        Telephone: this.state.Telephone,
    }).then((docRef) => {
      this.setState({
        key: '',
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
      this.props.navigation.navigate('ListRendez');
    })
    .catch((error) => {
      console.error("Error: ", error);
      this.setState({
        isLoading: false,
      });
    });
  }

  deleteUser() {
    const dbRef = firebase.firestore().collection('Rendez').doc(this.props.route.params.userkey)
      dbRef.delete().then((res) => {
          console.log('Item removed from database')
          this.props.navigation.navigate('ListRendez');
      })
  }

  openTwoButtonAlert=()=>{
    Alert.alert(
      'Delete Rendez-vous',
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
          <Button
            title='Update'
            onPress={() => this.updateUser()} 
            color="#19AC52"
          />
          </View>
         <View>
          <Button
            title='Delete'
            onPress={this.openTwoButtonAlert}
            color="#E37399"
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
  button: {
    marginBottom: 7, 
  }
})

export default RendezDetailScreen;