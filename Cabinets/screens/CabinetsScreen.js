import React, { Component } from 'react';
import { StyleSheet,TextInput, ScrollView, ActivityIndicator, View ,} from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../database/firebaseDb';
import { SearchBar } from 'react-native-elements';

class CabinetsScreen extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('Cabinets').orderBy("location");
    this.state = {
      isLoading: true,
      cabinetsArr: [],
     
    };
    
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  

  getCollection = (querySnapshot) => {
    const cabinetsArr = [];
    querySnapshot.forEach((res) => {
      const { name, image, location, telephone, desc,latitude,longitude } = res.data();
      cabinetsArr.push({
        key: res.id,
        res,
        name,
        image, location, telephone, desc,latitude,longitude
      });
    });
    this.setState({
      cabinetsArr,
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
            this.state.cabinetsArr.map((item, i) => {
              return (
                
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  leftAvatar={{ style:{width:80,height :80, margin:3},  source: { uri: item.image } }}
                  title={item.name}
                  subtitle={item.location}
                  onPress={() => {
                    this.props.navigation.navigate('CabinetsDetailScreen', {
                      cabinetskey: item.key
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
   paddingBottom: 22
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

export default CabinetsScreen;