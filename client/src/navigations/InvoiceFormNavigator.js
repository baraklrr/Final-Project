import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import InvoiceFirst from "../screens/invoices/InvoiceFirst";
import InvoiceSecond from "../screens/invoices/InvoiceSecond";
import Ionicons from "react-native-vector-icons/Ionicons";

const ModalStack = createStackNavigator();

const InvoiceFormNavigator = () => (
  <ModalStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <ModalStack.Screen
      name="חשבונית מס/קבלה"
      component={InvoiceFirst}
      options={{
        headerShown: true,
        headerTitleAlign:"center",
        headerBackImage: () => (
          <Ionicons name="close-sharp" size={28} color="black" />
        ),
        presentation: "modal",
      }}
    />
    <ModalStack.Screen
      name="סיכום"
      component={InvoiceSecond}
      options={{
        headerShown: true,
        presentation: "modal",
        ...TransitionPresets.SlideFromRightIOS
      }}
    />
  </ModalStack.Navigator>
);

export default InvoiceFormNavigator;
