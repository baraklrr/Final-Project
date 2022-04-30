import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import TabNavigation from "./TabNavigation";
import MybuissnessNavigator from './MyBuissnessNavigator';

import {TabContextProvider} from "./TabContext";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <TabContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Root"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Root" component={TabNavigation} />
          <Stack.Screen name="MyBuissness" component={MybuissnessNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </TabContextProvider>
  );
};

export default MainNavigator;