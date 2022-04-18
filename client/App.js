import React from "react";
import { Provider } from "react-native-paper";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "./core/theme";
import AuthStack from "./navigation/AuthStack";
import { I18nManager } from "react-native";
import MainNavigator from "./src/navigations/MainNavigator";

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export default function App() {
  return (
    <Provider theme={theme}>
      <MainNavigator />
    </Provider>
  );
}
