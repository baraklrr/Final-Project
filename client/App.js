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

export const AuthContext = React.createContext();

 

export default function App() {
  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  const [isloggedin,setLogged] = useState(null)

  const detectLogin= async ()=>{
     const token = await (await AsyncStorage.getItem('user'))
   
     if(token){
         setLogged(true)
     }else{
         setLogged(false)
     }
  }
 useEffect(()=>{
    detectLogin()
 },[])
 console.log(isloggedin)

   return (
    <Provider theme={theme}>
      {/* {isloggedin ?  */}
      {/* ( */}
         <MainNavigator/>
         {/* ): */}
       {/* ( <AuthStack/>) */}
      </Provider>
  );

}
