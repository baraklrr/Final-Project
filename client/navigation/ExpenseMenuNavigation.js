import React from "react";

import { createStackNavigator } from '@react-navigation/stack'
import expensemenuscrene from '../screens/expensemenuscrene'
import StartScreen from '../screens/StartScreen'
import TabNavigation from './TabNavigation';
import {TabContextProvider} from "../navigation/TabContext";

const Stack = createStackNavigator();

const ExpenseStack = () => {
  return (
    <TabContextProvider>
    <Stack.Navigator
    initialRouteName="menu"
    screenOptions={{
      headerShown: true,
    }}>
    <Stack.Screen name="menu" component={expensemenuscrene} />
    <Stack.Screen name="Dashboard" component={Dashboard}/>
  </Stack.Navigator>
  </TabContextProvider>)
}

export default ExpenseStack;
