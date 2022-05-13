import React from "react";

import { createStackNavigator } from '@react-navigation/stack'
import MyBuissnessScreen from "../screens/MyBuissnessScreen"
import MyDetails from "../screens/MyDetails"
import TabNavigation from "./TabNavigation";
import Myfiles from "../screens/MyFiles"
import {COLORS} from "../core/theme";


import ReportScreen from "../screens/ReportScreen"

const Stack = createStackNavigator();


const MybuissnessNavigator = () => 
{
 
  return (
    <Stack.Navigator
    screenOptions={{headerTitleStyle: {alignItems: 'center'},
    headerStyle: {
    },
    headerBackTitleStyle: {
        color: 'transparent',
    },
    headerBackTitleVisible: false }} 
    >
    <Stack.Screen name="העסק שלי" component={MyBuissnessScreen} />
    <Stack.Screen name="הדיווחים שלי" component={ReportScreen}/>
     <Stack.Screen name="ערוך את הפרטים שלי" component={MyDetails} /> 
    <Stack.Screen name= "המסמכים שלי" component={Myfiles} />
    </Stack.Navigator>
  )
}

export default MybuissnessNavigator;
