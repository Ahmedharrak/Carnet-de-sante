
import React from 'react'
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import Login from './Login.js'
import Accueil from './Accueil.js'
import Creer from './Creer.js'
import Carnet from './carnetPersonnel/carnetPersonnel'
import Laboratoires from './Laboratoires/Laboratoires'
import Hopitaux from './Hopitaux/Hopitaux'
import Cabinets from './Cabinets/Cabinets'
import Services from './Services/Services'
import loginS from './components/signup'
import loginD from './components/dashboard'
import loginL from './components/login'

const Routes = () => (
   <Router>
      <Scene key = "root">     
      <Scene key = "Login" component = {Login} title = "Login" initial = {true} />
        <Scene key = "Accueil" component = {Accueil} title = "Accueil" /> 
         <Scene key = "Creer" component = {Creer} title = "Creer" />
         <Scene key = "Laboratoires" component = {Laboratoires} title = "Laboratoires" />
         <Scene key = "Hopitaux" component = {Hopitaux} title = "Hopitaux" />
         <Scene key = "Cabinets" component = {Cabinets} title = "Cabinets" />
         <Scene key = "Services" component = {Services} title = "Services" />
         <Scene key = "loginS" component = {loginS} title = "loginS" />
         <Scene key = "loginL" component = {loginL} title = "loginL" />
         <Scene key = "loginD" component = {loginD} title = "loginD" />
      </Scene>
   </Router>
)
export default Routes


// App.js

