import React, { Component } from 'react';
import { StyleSheet,TextInput, ScrollView, ActivityIndicator, View ,ImageBackground} from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../../database/firebaseDb';
const image = require('../img/background.jpg');
class Medicaments extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('medicament').orderBy("nameM");
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
      const { name, image, nameM, nameE, desc,site } = res.data();
      hopitauxArr.push({
        key: res.id,
        res,
        name,
        image, nameM, nameE, desc,site
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
     
          {
            this.state.hopitauxArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  leftAvatar={{ style:{width:80,height :80, margin:3},  source: { uri: item.image } }}
                  title={item.name}
                  subtitle={item.nameM}
                  onPress={() => {
                    this.props.navigation.navigate('MedicamentsD', {
                      hopitauxkey: item.key
                    });
                  }}/>
              );
            })
          }
         
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

export default Medicaments;