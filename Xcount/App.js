import React from "react";
import { Provider } from "react-native-paper";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./core/theme";
import { LoginScreen, RegisterScreen, Dashboard } from "./screens";
import MyProfileScreen from "./screens/MyProfile";
import { I18nManager } from "react-native";
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MyProfileScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
