import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View ,Text} from 'react-native';
import firebase from '../../database/firebaseDb';

class PoidDetailScreen extends Component {

  constructor() {
    super();
    this.state = {
        hanches:'',
        poitrine:'',
        ventre:'',
        bras:'',
        cuisses:'',
        taille: '',
        date: '',
      isLoading: true
    };
  }
 
  componentDidMount() {
    const dbRef = firebase.firestore().collection('Poid').doc(this.props.route.params.userkey)
    dbRef.get().then((res) => {
      if (res.exists) {
        const user = res.data();
        this.setState({
          key: res.id,
          date:user.date,
          bras:user.bras,
          cuisses:user.cuisses,
          taille:user.taille,
          ventre:user.ventre,
        poitrine: user.poitrine,
        hanches: user.hanches,
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
    const updateDBRef = firebase.firestore().collection('Poid').doc(this.state.key);
    updateDBRef.set({
        
      hanches:this.state.hanches,
        date:this.state.date,
        poitrine:this.state.poitrine,
        ventre:this.state.ventre,
        taille:this.state.taille,
        bras:this.state.bras,
        cuisses: this.state.cuisses,
    }).then((docRef) => {
      this.setState({
        key: '',
        hanches:'',
        poitrine:'',
        ventre:'',
        bras:'',
        cuisses:'',
        taille: '',
        date: '',
        isLoading: false,
      });
      this.props.navigation.navigate('ListPoid');
    })
    .catch((error) => {
      console.error("Error: ", error);
      this.setState({
        isLoading: false,
      });
    });
  }

  deleteUser() {
    const dbRef = firebase.firestore().collection('Poid').doc(this.props.route.params.userkey)
      dbRef.delete().then((res) => {
          console.log('Item removed from database')
          this.props.navigation.navigate('ListPoid');
      })
  }

  openTwoButtonAlert=()=>{
    Alert.alert(
      'Delete Poid',
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

export default PoidDetailScreen;