import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View, Text,ImageBackground} from 'react-native';
import firebase from '../database/firebaseDb';
import { Image } from 'react-native-elements';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
const image = require('../img/background.jpg');

var mapStyle=[{"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}];

class HopitauxDetailScreen extends Component {

  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('Favoris');
    this.state = {
      name: '',
      image: '', 
      location: '', 
      telephone: '',
      desc: '',
      latitude:'',
      longitude:'',
      isLoading: true
    };
  }
 
  componentDidMount() {
    const dbRef = firebase.firestore().collection('Hopitaux').doc(this.props.route.params.hopitauxkey)
    dbRef.get().then((res) => {
      if (res.exists) {
        const Hopitaux = res.data();
        this.setState({
          key: res.id,
          name: Hopitaux.name,
          image: Hopitaux.image, location: Hopitaux.location, telephone: Hopitaux.telephone, desc: Hopitaux.desc,
          latitude: Hopitaux.latitude,longitude: Hopitaux.longitude,
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
        this.props.navigation.navigate('HopitauxScreen')
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
          <View >        
             <Image
                source={{ uri: this.state.image }}
                style={{ width: 200, height: 200,marginLeft:30,marginTop:10,}}
             />
            </View>
        <View >
          <Text style={{ 
          marginLeft:30,marginTop:5,color:'yellow',fontSize: 20,  }}>Name :</Text>
          <TextInput
          style={{ marginLeft:30,fontSize: 14,color : "white" }}
              placeholder={'Name'}
              value={this.state.name}
              onChangeText={(val) => this.inputValueUpdate(val, 'name')}
              editable={false} selectTextOnFocus={false}
          />
        </View>
        <View >
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
        <View >
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
        <View >
        <Text style={{ 
          marginLeft:30,marginTop:5,color:'yellow',fontSize: 20,  }}>Position Actuelle</Text>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 35.575150, 
            longitude: -5.358925,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}
        >
          <Marker
            draggable
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={this.state.name}
            
          />
        </MapView>
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
    marginBottom: 7, 
  },
  map: {
    
    top:20,
    marginBottom:50,
    marginLeft:30,marginTop:10 ,
    width:200,
    height:200,
  },
})

export default HopitauxDetailScreen;