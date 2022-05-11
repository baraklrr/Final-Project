import React from "react";

import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/User/LoginScreen'
import RegisterScreen from '../screens/User/StartScreen'
import StartScreen from '../screens/User/StartScreen'
import TabNavigation from './TabNavigation';
import {TabContextProvider} from "../context/TabContext";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <TabContextProvider>
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName="StartScreen"
    screenOptions={{
      headerShown: false,
    }}>
       <Stack.Screen name="StartScreen" component={StartScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
  </Stack.Navigator>
  </NavigationContainer>
  </TabContextProvider>)
}

export default AuthStack;
