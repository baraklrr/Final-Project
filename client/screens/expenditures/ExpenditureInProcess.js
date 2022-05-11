import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ExpenditureNotYetConfirmed from "./ExpenditureNotYetConfirmed";
import ExpenditureDeferred from "./ExpenditureDeferred";

const Tab = createMaterialTopTabNavigator();

const ExpenditureInProcess = ({ navigation, props }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({});
  }, [navigation]);

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="הוצאות שטרם אושרו"
        screenOptions={{
          tabBarScrollEnabled: false,
          tabBarLabelStyle: { fontSize: 14 },
          // tabBarStyle: { backgroundColor: "powderblue" },
        }}
      >
        <Tab.Screen name="הוצאות שנדחו" component={ExpenditureDeferred} />
        <Tab.Screen
          name="הוצאות שטרם אושרו"
          component={ExpenditureNotYetConfirmed}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: "green",
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

export default ExpenditureInProcess;
