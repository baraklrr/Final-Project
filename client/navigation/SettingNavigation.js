
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../screens/Settings';
import about from '../screens/about';
const Stack = createNativeStackNavigator();


const SettingStack=()=>{
  return(
    <Stack.Navigator
    initialRouteName="SettingsScreen"
    >
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{headerShown:false}} />
    <Stack.Screen name="aboutourapp" component={about} options={{title:""}} />
  </Stack.Navigator>)
}

export default SettingStack;