import React from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import TabsNavigator from "./TabsNavigator";
import InvoiceFormNavigator from "./InvoiceFormNavigator";
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
          <Stack.Screen
          name="modal"
          component={InvoiceFormNavigator}
          options={{
            headerShown: false,
            presentation: 'modal',
            // ...TransitionPresets.ModalPresentationIOS,
          }}
        /> 
        </Stack.Navigator>
      </NavigationContainer>
    </TabContextProvider>
  );
};

export default MainNavigator;
