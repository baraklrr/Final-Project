import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MyDetails from "../screens/MyDetails";
import { theme } from "../core/theme";

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  const insets = useSafeAreaInsets();
  const tabsDefenition = [
    {
      name: "MyDetails",
      component: MyDetails,
      options: { tabBarLabel: "פרטים אישיים" },
    },
    {
      name: "BusinessDetails",
      component: MyDetails,
      options: { tabBarLabel: "פרטי העסק" },
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="MyProfileScreen"
      screenOptions={{
        activeTintColor: theme.colors.primary,
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "white" },
        headerStatusBarHeight: 20,
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
