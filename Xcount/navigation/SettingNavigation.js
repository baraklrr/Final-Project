
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import SettingsScreen from '../screens/Settings';
import StartScreen from '../screens/StartScreen'

const Stack = createStackNavigator();


const AuthStack=()=>{
  return(
    <Stack.Navigator
    initialRouteName="SettingsScreen"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    <Stack.Screen name="StartScreen" component={StartScreen} />
  </Stack.Navigator>)
}

export default AuthStack;