import React from "react";

import { createStackNavigator } from '@react-navigation/stack'
import {LoginScreen,RegisterScreen} from '../screens'
import StartScreen from '../screens/StartScreen'
import TabNavigation from './TabNavigation';
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
    initialRouteName="StartScreen"
    screenOptions={{
      headerShown: false,
    }}>
       <Stack.Screen name="StartScreen" component={StartScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    <Stack.Screen name="Dashboard" component={TabNavigation}/>
  </Stack.Navigator>)
}

export default AuthStack;