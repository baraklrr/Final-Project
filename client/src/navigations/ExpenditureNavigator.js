import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import ExpenditureScreen from "../screens/expenditures/ExpenditureScreen";
import ExpenditureInProcess from "../screens/expenditures/ExpenditureInProcess";
import Ionicons from "react-native-vector-icons/Ionicons";

const ModalStack = createStackNavigator();

const ExpenditureNavigator = () => {
  return (
    <ModalStack.Navigator initialRouteName="הוספת הוצאה">
      <ModalStack.Group screenOptions={{ headerShown: false}}>
        <ModalStack.Screen
          name="הוספת הוצאה"
          component={ExpenditureScreen}
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
          name="הוצאות בתהליך קליטה"
          component={ExpenditureInProcess}
          options={({ navigation, route }) => ({
            headerShown: true,
            headerTitleAlign: "center",
            headerBackImage: () => (
              <Ionicons name="close-sharp" size={28} color="black" />
            ),
            presentation: "modal",
          })}
        />
      </ModalStack.Group>
    </ModalStack.Navigator>
  );
};

export default ExpenditureNavigator;
