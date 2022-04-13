import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from '../screens/Dashboard';
import NotificationScreen from '../screens/NotificationScreen';
import SettingNavigation from './SettingNavigation';

const Tab = createBottomTabNavigator();


const TabNavigation = () =>{
return (
<Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
}}>

<Tab.Screen name="בית" component={Dashboard}  options={
    {headerShown:true,
    headerBackVisble:false,
    headerTitleAlign:'center', tabBarIcon: ({color, size}) => (
    <Ionicons name="home-outline" color={color} size={size} />)}}/>


<Tab.Screen name="העסק שלי"  component={NotificationScreen}
options=
{{tabBarIcon: ({color, size}) => (
    <Ionicons name="person" color={color} size={size} />)}}/>   


<Tab.Screen name="הוספה" component={Dashboard} options=
{{tabBarIcon: ({color, size}) => (
    <Ionicons name="add" color={color} size={size} />)}}/>

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

export default TabNavigation;