import React, { Component } from 'react';
import { StyleSheet,TextInput, ScrollView, ActivityIndicator, View ,ImageBackground} from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../database/firebaseDb';
import { SearchBar } from 'react-native-elements';
const image = require('../img/background.jpg');

class FavorisScreen extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('Favoris').orderBy("location");
    this.state = {
      isLoading: true,
      hopitauxArr: [],
     
    };
    
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  

  getCollection = (querySnapshot) => {
    const hopitauxArr = [];
    querySnapshot.forEach((res) => {
      const { name, image, location, telephone, desc } = res.data();
      hopitauxArr.push({
        key: res.id,
        res,
        name,
        image, location, telephone, desc
      });
    });
    this.setState({
        hopitauxArr,
      isLoading: false,
   });
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
          {
            this.state.hopitauxArr.map((item, i) => {
              return (
                
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  leftAvatar={{ style:{width:80,height :80, margin:3},  source: { uri: item.image } }}
                  title={item.name}
                  subtitle={item.location}
                  onPress={() => {
                    this.props.navigation.navigate('FavorisHDetailScreen', {
                      hopitauxkey: item.key
                    });
                  }}/>
              );
            })
          }
          </ImageBackground> 
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
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
  }
})

export default FavorisScreen;