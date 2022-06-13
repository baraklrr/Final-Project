
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../screens/Settings';

const Stack = createNativeStackNavigator();


const SettingStack=()=>{
  return(
    <Stack.Navigator
    initialRouteName="SettingsScreen"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
  </Stack.Navigator>)
}

export default SettingStack;