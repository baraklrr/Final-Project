import React, { useEffect, useState } from 'react';
import { Provider } from 'react-native-paper';
import 'react-native-gesture-handler';
import { AuthContext } from './context/AuthContext';
import { theme } from './core/theme';
import AuthStack from './navigation/AuthStack';
import { Alert, I18nManager, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainNavigator from './navigation/MainNavigator';
import AuthService from './services/auth.service';

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
        case 'SIGN_UP':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    bootstrapAsync();
  }, []);

  const bootstrapAsync = async () => {
    let userToken;
    try {
      // Restore token 
      userToken = await AsyncStorage.getItem('token');
      console.log('token :' + userToken);
    } catch (e) {
      // Restoring token failed
      console.log('error ' + e);
    }
    // After restoring token, we may need to validate it in production app
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    
    dispatch({ type: 'RESTORE_TOKEN', token: userToken });
  };

  const authContext = React.useMemo(
    () => ({
      signIn: async (username, password) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        await AuthService.login(username, password)
          .then(async (response) => {
            AuthService.saveUserToLocalStorage("token",response.data.accessToken);
            AuthService.saveUserToLocalStorage("username",response.data.username);
            AuthService.saveUserToLocalStorage("email",response.data.email);
            AuthService.saveUserToLocalStorage("phone",response.data.phoneNumber);
            AuthService.saveUserToLocalStorage("buissnesname",response.data.businessName);
            AuthService.saveUserToLocalStorage("businessAddress",response.data.businessAddress);

            let userToken = await AsyncStorage.getItem('token');
            dispatch({ type: 'SIGN_IN', token: userToken });
          })
          .catch((error) => {
            console.log('error ' + error);
            Alert.alert('שגיאה', 'הוזנו פרטים שגויים, יש לנסות שוב. משתמש חדש? לחץ על "הירשם" .', [
              { text: 'אישור', onPress: () => console.log('OK Pressed') },
            ]);
            if(error.response.status==401)
            {
              dispatch({ type: 'SIGN_OUT' });
            }
          });
      },
      signOut: () => {
        AuthService.logout();
        dispatch({ type: 'SIGN_OUT' });
      },
      signUp: async (username, email, password) => {
        AuthService.register(username, email, password)
          .then(() => {
            console.log('sign up user');
          })
          .catch((error) => {
            const resMessage = error.response?.data?.message;
            console.log('this undefined' + resMessage);
            Alert.alert(error.response?.data?.message);
          });
        let userToken = await AsyncStorage.getItem('token');
        dispatch({ type: 'SIGN_UP', token: userToken });
      },
    }),
    []
  );
  
  return (
    <AuthContext.Provider value={authContext}>
      <Provider theme={theme}>
        {state.userToken === null ? <AuthStack /> : <MainNavigator />}
      </Provider>
    </AuthContext.Provider>
  );
}
