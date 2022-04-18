import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import TabsNavigator from "./TabsNavigator";
import {TabContextProvider} from "../context/TabContext";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <TabContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Root"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Root" component={TabsNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </TabContextProvider>
  );
};

export default MainNavigator;
