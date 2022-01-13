import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View, Text,ImageBackground} from 'react-native';
import firebase from '../database/firebaseDb';
import { Image } from 'react-native-elements';
const image = require('../img/background.jpg');


class ServicesDetailScreen extends Component {

  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('FavorisS');
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
    const dbRef = firebase.firestore().collection('Services').doc(this.props.route.params.serviceskey)
    dbRef.get().then((res) => {
      if (res.exists) {
        const Services = res.data();
        this.setState({
          key: res.id,
          name: Services.name,
          image: Services.image, location: Services.location, telephone: Services.telephone, desc: Services.desc,
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

 
  storeUser() {
    if(this.state.name === ''){
     alert('Fill at least your name!')
    } else {
      this.setState({
        isLoading: true,
      });      
      this.dbRef.add({
        name: this.state.name,
        image:this.state.image,
        location:this.state.location,
        telephone:this.state.telephone, 
        desc:this.state.desc,       
      }).then((res) => {
        this.setState({
          name: '',
          image:'', 
          location:'', 
          telephone:'', 
          desc:'',
          isLoading: false,
        });
        this.props.navigation.navigate('Services')
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
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.inputGroup}>
             <Image
                source={{ uri: this.state.image }}
                style={{ width: 200, height: 200,marginLeft:30,marginTop:10,}}
             />
            </View>
        <View style={styles.inputGroup}>
        <Text style={{ 
          marginLeft:30,marginTop:5,color:'yellow',fontSize: 20 }}>Name :</Text>
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
          marginLeft:30,marginTop:5,color:'yellow',fontSize: 20,  }}>Adresse :</Text>
          <TextInput
              style={{ marginLeft:30,fontSize: 14,color : "white" }}
              placeholder={'desc'}
              value={this.state.desc}
              onChangeText={(val) => this.inputValueUpdate(val, 'desc')}
              editable={false} selectTextOnFocus={false}
          />
        </View>
        <View style={styles.inputGroup1}>
        <Text style={{ 
          marginLeft:30,marginTop:5,color:'yellow',fontSize: 20,  }}>Numero de Telephone :</Text>
          <TextInput
              style={{ marginLeft:30,fontSize: 14,color : "white" }}
              placeholder={'Mobile'}
              value={this.state.telephone}
              onChangeText={(val) => this.inputValueUpdate(val, 'telephone')}
              editable={false} selectTextOnFocus={false}
          />
        </View>

        <View style={styles.button1}>
          <Button
            title='Ajouter a Favoris'
            onPress={() => this.storeUser()} 
            color="#19AC52"
          />
        </View>
        </ImageBackground>
      </ScrollView>
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
  },
  button1: {
    marginBottom:300
  },

})

export default ServicesDetailScreen;