import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Input, Button } from "@rneui/base";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    </View>
  );
}
const Tab = createMaterialTopTabNavigator();
const InvoicePayment = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          containerStyle={{
            width: 80,
            marginVertical: 10,
          }}
          onPress={() => navigation.navigate("חשבונית מס/קבלה", { id: 123 })}
          title="הוספה"
          type="clear"
          titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
        />
      ),
    });
  }, [navigation]);

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarLabelStyle: { fontSize: 14 },
          tabBarItemStyle: { width: 100 },
          // tabBarStyle: { backgroundColor: "powderblue" },
        }}
      >
        <Tab.Screen name="העברה בנקאית" component={SettingsScreen} />
        <Tab.Screen name="כ.אשראי" component={SettingsScreen} />
        <Tab.Screen name="שיק" component={SettingsScreen} />
        <Tab.Screen name="אפליקציית תשלום" component={SettingsScreen} />
        <Tab.Screen name="אחר" component={SettingsScreen} />
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

export default InvoicePayment;
