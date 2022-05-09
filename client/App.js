import React, { useEffect, useState } from "react";
import { Provider } from "react-native-paper";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "./core/theme";
import AuthStack from "./navigation/AuthStack";
import { I18nManager } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainNavigator from "./navigation/MainNavigator";


I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export default function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    AsyncStorage.getItem('user').then((value) => {
      if (value) {
        setCurrentUser(JSON.parse(value));
      }else{
        console.log('cant login user')
      }
    });
  }, []);
  // if(!currentUser)
   return (
    <Provider theme={theme}>
      <MainNavigator />
   </Provider>
  );
  // else{
    // return (
    // <Provider theme={theme}>
    //   <MainNavigator />
    // </Provider>
    // );
  //}
}
