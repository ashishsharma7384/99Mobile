import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/components/Splash';
import Login from './src/Authentication/Login';
import Registration from './src/Authentication/Registration';


import Dashboard from './src/components/Dashboard';

const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={Splash} />
          <Stack.Screen name="LoginScreen" component={Login} />
          <Stack.Screen name="RegistrationScreen" component={Registration} />
          <Stack.Screen name="DashboardScreen" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
}