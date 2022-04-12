import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TextBase, View } from "react-native";
import MyDetails from "../screens/MyDetails";

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  const insets = useSafeAreaInsets();
  const tabsDefenition = [
    {
      name: "BusinessDetails",
      component: MyDetails,
      options: { tabBarLabel: "פרטי העסק" },
    },
    {
      name: "MyDetails",
      component: MyDetails,
      options: { tabBarLabel: "פרטים אישיים" },
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="MyProfileScreen"
      tabBarOptions={{
        activeTintColor: "#e91e63",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "white" },
      }}
    >
      {tabsDefenition.map((tab, i) => (
        <Tab.Screen
          key={`tab-${i}`}
          name={tab.name}
          component={tab.component}
          options={tab.options}
        />
      ))}
    </Tab.Navigator>
  );
}

export default function TopBarNavigator(props) {
  return <MyTabs />;
}
