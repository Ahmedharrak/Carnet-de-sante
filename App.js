import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Signup from './components/signup';
import info from './components/info'
import Accueil from './Accueil'
import Carnet from './carnetPersonnel/carnetPersonnel'
import Laboratoires from './Laboratoires/Laboratoires'
import Services from './Services/Services'
import Hopitaux from './Hopitaux/Hopitaux'
import Cabinets from './Cabinets/Cabinets'
import ProfileScreen from './ProfileScreen'
import HopitauxScreen from './Hopitaux/screens/HopitauxScreen'
import FavorisScreen from './Hopitaux/screens/FavorisScreen';
import FavorisHDetailScreen from './Hopitaux/screens/FavorisHDetailScreen';
import HopitauxDetailScreen from './Hopitaux/screens/HopitauxDetailScreen';
import LaboratoiresScreen from './Laboratoires/screens/LaboratoiresScreen'
import LaboratoiresDetailScreen from './Laboratoires/screens/LaboratoiresDetailScreen'
import FavorisLDetailScreen from './Laboratoires/screens/FavorisLDetailScreen'
import FavorisLScreen from './Laboratoires/screens/FavorisLScreen'
import ServicesScreen from './Services/screens/ServicesScreen'
import ServicesDetailScreen from './Services/screens/ServicesDetailScreen'
import FavorisSScreen from './Services/screens/FavorisSScreen'
import FavorisSDetailScreen from './Services/screens/FavorisSDetailScreen'
import CabinetsScreen from './Cabinets/screens/CabinetsScreen'
import CabinetsDetailScreen from './Cabinets/screens/CabinetsDetailScreen'
import FavorisCScreen from './Cabinets/screens/FavorisCScreen'
import FavorisCDetailScreen from './Cabinets/screens/FavorisCDetailScreen'
import Rendez from './carnetPersonnel/screens/Rendez'
import AddRendezScreen from './carnetPersonnel/screens/AddRendezScreen'
import ListRendez from './carnetPersonnel/screens/ListRendez'
import RendezDetailScreen from './carnetPersonnel/screens/RendezDetailScreen'
import Poid from './carnetPersonnel/screens/Poid' 
import AddPoidScreen from './carnetPersonnel/screens/AddPoidScreen'
import ListPoid from './carnetPersonnel/screens/ListPoid'
import PoidDetailScreen from './carnetPersonnel/screens/PoidDetailScreen'
import Medicaments from './carnetPersonnel/screens/Medicaments'
import MedicamentsD from './carnetPersonnel/screens/MedicamentsD'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Inscrire' }}
      />  
      <Stack.Screen 
       name="info" 
       component={info} 
       options={
         { title: 'Information de Projet' }         
       }
      />         
       <Stack.Screen 
       name="Accueil" 
       component={Accueil} 
       options={
         { title: 'Page Home' },
         {headerLeft: null} 
       }
      />
       <Stack.Screen 
       name="Carnet" 
       component={Carnet} 
       options={
         { title: 'Carnet Personne' }
       }
      />
      
      <Stack.Screen 
       name="Laboratoires" 
       component={Laboratoires} 
       options={
         { title: 'Laboratoires Home' }
       }
      />
      <Stack.Screen 
       name="Services" 
       component={Services} 
       options={
         { title: 'Services Home' }        
       }
      />
      <Stack.Screen 
       name="Hopitaux" 
       component={Hopitaux} 
       options={
         { title: 'Hopitaux Home' }        
       }
      />
      <Stack.Screen 
       name="Cabinets" 
       component={Cabinets} 
       options={
         { title: 'Cabinets Home' }        
       }
      />
      <Stack.Screen 
       name="ProfileScreen" 
       component={ProfileScreen} 
       options={
         { title: 'Profile User' }         
       }
      />
      <Stack.Screen 
       name="HopitauxScreen" 
       component={HopitauxScreen} 
       options={
         { title: 'Voila la liste des Hopitaux' }        
       }
      />
      <Stack.Screen 
       name="FavorisScreen" 
       component={FavorisScreen} 
       options={
         { title: 'Liste des Favoris' }
       }
      />   
      <Stack.Screen 
       name="FavorisHDetailScreen" 
       component={FavorisHDetailScreen} 
       options={
         { title: 'Detail' }
       }
      />
      <Stack.Screen 
        name="HopitauxDetailScreen" 
        component={HopitauxDetailScreen} 
        options={{ title: 'Detail de la liste' }}
      />
      <Stack.Screen 
       name="LaboratoiresScreen" 
       component={LaboratoiresScreen} 
       options={
         { title: 'la liste des Laboratoires' }
       }
      />
      <Stack.Screen 
       name="LaboratoiresDetailScreen" 
       component={LaboratoiresDetailScreen} 
       options={
         { title: 'Detail de la liste' }
       }
      />
      <Stack.Screen 
       name="FavorisLScreen" 
       component={FavorisLScreen} 
       options={
         { title: 'Liste des Favoris' }
       }
      />      
      <Stack.Screen 
       name="FavorisLDetailScreen" 
       component={FavorisLDetailScreen} 
       options={
         { title: 'Detail' }
       }
      />
      <Stack.Screen 
       name="ServicesDetailScreen" 
       component={ServicesDetailScreen} 
       options={
         { title: 'Detail de la liste' }
       }
      />
      <Stack.Screen 
       name="ServicesScreen" 
       component={ServicesScreen} 
       options={
         { title: 'Voila la liste des Services' }
       }
      />
      <Stack.Screen 
       name="FavorisSScreen" 
       component={FavorisSScreen} 
       options={
         { title: 'Liste des Favoris' }
       }
      />
      <Stack.Screen 
       name="FavorisSDetailScreen" 
       component={FavorisSDetailScreen} 
       options={
         { title: 'Detail' }
       }
      />
      <Stack.Screen 
        name="CabinetsScreen" 
        component={CabinetsScreen} 
        options={{ title: 'Voila la liste des Cabinets' }}
      />
      <Stack.Screen 
        name="CabinetsDetailScreen" 
        component={CabinetsDetailScreen} 
        options={{ title: 'Detail de la liste ' }}
      />
      <Stack.Screen 
        name="FavorisCScreen" 
        component={FavorisCScreen} 
        options={{ title: 'Liste des Favoris ' }}
      />
      <Stack.Screen 
        name="FavorisCDetailScreen" 
        component={FavorisCDetailScreen} 
        options={{ title: 'Detail ' }}
      />

      <Stack.Screen 
        name="Rendez" 
        component={Rendez} 
        options={{ title: 'Rendez-vous Home ' }}
      />
      <Stack.Screen 
        name="ListRendez" 
        component={ListRendez} 
        options={{ title: 'Liste des Rendez-vous ' }}
      />
      <Stack.Screen 
        name="AddRendezScreen" 
        component={AddRendezScreen} 
        options={{ title: 'Prenez rendez-vous' }}
      />
      <Stack.Screen 
        name="RendezDetailScreen" 
        component={RendezDetailScreen} 
        options={{ title: 'Detail de Rendez-vous' }}
      />

      <Stack.Screen 
        name="Poid" 
        component={Poid} 
        options={{ title: 'Poid et mesures du corps' }}
      />
      <Stack.Screen 
        name="PoidDetailScreen" 
        component={PoidDetailScreen} 
        options={{ title: 'Detail de Poid' }}
      />
      <Stack.Screen 
        name="AddPoidScreen" 
        component={AddPoidScreen} 
        options={{ title: 'Ajouter' }}
      />
      <Stack.Screen 
        name="ListPoid" 
        component={ListPoid} 
        options={{ title: 'Liste des poids' }}
      />
       
       <Stack.Screen 
        name="Medicaments" 
        component={Medicaments} 
        options={{ title: 'Liste des Médicaments' }}
      />
      <Stack.Screen 
        name="MedicamentsD" 
        component={MedicamentsD} 
        options={{ title: 'Information de Médicament' }}
      />
       
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
