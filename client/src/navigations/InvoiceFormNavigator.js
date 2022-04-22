import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import InvoiceFirst from "../screens/invoices/InvoiceFirst";
import InvoiceSecond from "../screens/invoices/InvoiceSecond";
import Ionicons from "react-native-vector-icons/Ionicons";
import InvoiceItem from "../screens/invoices/InvoiceItem";
import InvoicePayment from "../screens/invoices/InvoicePayment";
import InvoiceFinal from "../screens/invoices/InvoiceFinal";
import InvoiceView from "../screens/invoices/InvoiceView";
import InvoiceViewOptions from "../screens/invoices/InvoiceViewOptions";

const ModalStack = createStackNavigator();

const InvoiceFormNavigator = () => {
  return (
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
          headerTitleAlign: "center",
          headerBackImage: () => (
            <Ionicons name="close-sharp" size={28} color="black" />
          ),
          presentation: "modal",
        }}
      />

      <ModalStack.Screen
        name="הוספת פריט"
        component={InvoiceItem}
        options={({ navigation, route }) => ({
          headerShown: true,
          headerTitleAlign: "center",
          headerBackImage: () => (
            <Ionicons name="close-sharp" size={28} color="black" />
          ),
          presentation: "modal",
        })}
      />
      <ModalStack.Screen
        name="הוספת אמצעי תשלום"
        component={InvoicePayment}
        options={({ navigation, route }) => ({
          headerShown: true,
          headerTitleAlign: "center",
          headerBackImage: () => (
            <Ionicons name="close-sharp" size={28} color="black" />
          ),
          presentation: "modal",
        })}
      />
      <ModalStack.Screen
        name="סיכום"
        component={InvoiceSecond}
        options={{
          headerTitleAlign: "center",
          headerShown: true,
          presentation: "modal",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />

      <ModalStack.Screen
        name="חשבונית מס/קבלה 240796"
        component={InvoiceFinal}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerBackImage: () => (
            <Ionicons name="close-sharp" size={28} color="black" />
          ),
          presentation: "modal",
        }}
      />
      <ModalStack.Screen
        name="צפה בהכנסה"
        component={InvoiceView}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerBackImage: () => (
            <Ionicons name="close-sharp" size={28} color="black" />
          ),
          presentation: "modal",
        }}
      />
      <ModalStack.Screen
        name="אפשרויות"
        component={InvoiceViewOptions}
        options={{
          headerShown: false,
          cardOverlayEnabled: true,
          presentation: "transparentModal",
        }}
      />
    </ModalStack.Navigator>
  );
};

export default InvoiceFormNavigator;
