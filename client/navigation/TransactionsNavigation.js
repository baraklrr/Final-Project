import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Transaction from '../screens/transactions/Transaction';
import TabbedTransactions from '../screens/transactions/TabbedTransactions';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const TransactionsNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="alltrasactions">
      <Stack.Screen
        name="פרטי הוצאה"
        component={Transaction}
        options={{
          // title: 'הוצאה',
          headerShown: true,
          presentation: 'modal',
          // ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <Stack.Screen
        name="alltrasactions"
        component={TabbedTransactions}
        options={({ navigation, route }) => ({
          title: 'תנועות',
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close-sharp" size={28} color="black" />
            </TouchableOpacity>
          ),
          entation: 'modal',
        })}
      />
    </Stack.Navigator>
  );
};

export default TransactionsNavigation;
