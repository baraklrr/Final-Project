import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import VAT_Screen from '../screens/Reports/VAT_Screen';
import Income_Tax_Screen from '../screens/Reports/Income_Tax_Screen';

const Tab = createMaterialTopTabNavigator();

const ReportsNavigation = ({ navigation, props }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({});
  }, [navigation]);

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="מעמ"
        screenOptions={{
          tabBarScrollEnabled: false,
          tabBarLabelStyle: { fontSize: 14 },
          //   tabBarStyle: { backgroundColor: 'powderblue' },
        }}
      >
        <Tab.Screen name="דיווחי מס הכנסה" component={Income_Tax_Screen} />
        <Tab.Screen name="דיווחי מעמ" component={VAT_Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'green',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

export default ReportsNavigation;
