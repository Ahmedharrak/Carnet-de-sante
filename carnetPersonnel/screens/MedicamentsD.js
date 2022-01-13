import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View, Text,ImageBackground} from 'react-native';
import firebase from '../../database/firebaseDb';
import { Image } from 'react-native-elements';
const image = require('../img/background.jpg');


class MedicamentsD extends Component {

  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('medicament');
    this.state = {
      name: '',
      image: '', 
      nameM: '', 
      nameE: '',
      desc: '',
      site:'',
      isLoading: true
    };
  }
 
  componentDidMount() {
    const dbRef = firebase.firestore().collection('medicament').doc(this.props.route.params.hopitauxkey)
    dbRef.get().then((res) => {
      if (res.exists) {
        const Hopitaux = res.data();
        this.setState({
          key: res.id,
          name: Hopitaux.name,
          image: Hopitaux.image, site: Hopitaux.site, nameE: Hopitaux.nameE, desc: Hopitaux.desc,nameM: Hopitaux.nameM,
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
          marginLeft:30,marginTop:5,color:'yellow',fontSize: 20,  }}>Name de la medicament :</Text>
          <TextInput
          style={{ marginLeft:30,fontSize: 20,color : "white" }}
              placeholder={'Name'}
              value={this.state.name}
              onChangeText={(val) => this.inputValueUpdate(val, 'name')}
              editable={false} selectTextOnFocus={false}
          />
        </View>
        <View >
          <Text style={{ 
          marginLeft:30,marginTop:5,color:'yellow',fontSize: 20,  }}>Name de la maladie :</Text>
          <TextInput
              style={{ marginLeft:30,fontSize: 20,color : "white" }}
              placeholder={'desc'}
              value={this.state.nameM}
              onChangeText={(val) => this.inputValueUpdate(val, 'nameM')}
              editable={false} selectTextOnFocus={false}
          />
        </View>
        <View >
          <Text style={{ 
          marginLeft:30,marginTop:5,color:'yellow',fontSize: 20,  }}>Information de la medicament :</Text>
          <TextInput
              style={{ marginLeft:30,fontSize: 14,color : "white" }}
              value={this.state.desc}
              onChangeText={(val) => this.inputValueUpdate(val, 'desc')}
              editable={false} selectTextOnFocus={false}
          />
        </View>
        <View >
          <Text style={{ 
          marginLeft:30,marginTop:5,color:'yellow',fontSize: 20,  }}>Name de l'entreprise  :</Text>
          <TextInput
              style={{ marginLeft:30,fontSize: 17,color : "white" }}  
              value={this.state.nameE}
              onChangeText={(val) => this.inputValueUpdate(val, 'nameE')}
              editable={false} selectTextOnFocus={false}
          />
        </View>
        <View style={{marginBottom:300}}>
        <Text style={{ 
          marginLeft:30,marginTop:5,color:'yellow',fontSize: 20,  }}>Pour les informations plus  :</Text>  
          <TextInput
          style={{ marginLeft:30, fontSize: 15,color : "white" }}
              value={'https://www.webteb.com/'}
              onChangeText={(val) => this.inputValueUpdate(val, 'site')}
              editable={false} selectTextOnFocus={false}
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
  map: {
    
    top:20,
    marginBottom:50,
    marginLeft:30,marginTop:10 ,
    width:200,
    height:200,
  },
})

export default MedicamentsD;