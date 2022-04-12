import React from 'react'
import { Provider } from 'react-native-paper'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { theme } from './core/theme'
import AuthStack from './navigation/AuthStack';

export default function App() {
  return (
  <Provider theme={theme}>
  <NavigationContainer>
  <AuthStack/>
  </NavigationContainer>
  </Provider>
  );
}


