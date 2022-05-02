import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Input, Button } from "@rneui/themed";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    </View>
  );
}
const Tab = createMaterialTopTabNavigator();
const ExpenditureInProcess = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
    });
  }, [navigation]);

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: false,
          tabBarLabelStyle: { fontSize: 14 },
          // tabBarStyle: { backgroundColor: "powderblue" },
        }}
      >
        <Tab.Screen name="הוצאות שנדחו" component={SettingsScreen} />
        <Tab.Screen name="הוצאות שטרם אושרו" component={SettingsScreen} />
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
});

export default ExpenditureInProcess;
