import React from 'react'
import { Image, StyleSheet, View } from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from '../screens/Dashboard';
import NotificationScreen from '../screens/NotificationScreen';
import SettingNavigation from './SettingNavigation';
import UserInformation from '../screens/UserInformation';
import { useTabMenu } from "../navigation/TabContext";
import AddButton from "../components/AddButton";


const Tab = createBottomTabNavigator();


const TabNavigation = () =>{
    const { opened, toggleOpened } = useTabMenu();
return (
<Tab.Navigator
initialRouteName='Dashboard' 
screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        
}}>

<Tab.Screen name="בית" component={Dashboard}  options={
    {headerShown:true,
    headerBackVisble:false,
    headerTitleAlign:'center', tabBarIcon: ({color, size}) => (
    <Ionicons name="home-outline" color={color} size={size} />)}}/>


<Tab.Screen name="העסק שלי"  component={UserInformation}
options=
{{tabBarIcon: ({color, size}) => (
    <Ionicons name="person" color={color} size={size} />)}}/>   


<Tab.Screen name="הוספה" component={Dashboard} options=
{{tabBarButton: () => (
    <AddButton opened={opened} toggleOpened={toggleOpened} />
  ),}}/>

<Tab.Screen name="התראות"  component={NotificationScreen}
options=
{{tabBarIcon: ({color, size}) => (
    <Ionicons name="alert" color={color} size={size} />)}}/>   

<Tab.Screen name="הגדרות" component={SettingNavigation}
options=
{  {tabBarStyle: { display: "none" },tabBarIcon: ({color, size}) => (
    <Ionicons name="settings" color={color} size={size} />)}}/>


</Tab.Navigator>
 );
};

const styles = StyleSheet.create({
    tabBar: {
      position: "absolute",
      padding: 0,
      left: 16,
      right: 16,
      bottom: 32,
      height: 56,
      borderRadius: 16,
      backgroundColor: 'white',
      borderTopColor: "transparent",
      shadowColor: '#0000',
      shadowOffset: {
        height: 6,
        width: 0,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    tabIconContainer: {
      position: "absolute",
      top: 12,
      alignItems: "center",
      justifyContent: "center",
    },
    tabIcon: {
      width: 32,
      height: 32,
    },
  });

export default TabNavigation;
