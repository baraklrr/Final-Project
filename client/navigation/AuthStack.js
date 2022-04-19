import React from "react";

import { createStackNavigator } from '@react-navigation/stack'
import {LoginScreen,RegisterScreen} from '../screens'
import StartScreen from '../screens/StartScreen'
import TabNavigation from './TabNavigation';
import {TabContextProvider} from "../navigation/TabContext";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <TabContextProvider>
    <Stack.Navigator
    initialRouteName="StartScreen"
    screenOptions={{
      headerShown: false,
    }}>
       <Stack.Screen name="StartScreen" component={TabNavigation} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    <Stack.Screen name="Dashboard" component={StartScreen}/>
  </Stack.Navigator>
  </TabContextProvider>)
}

export default AuthStack;
