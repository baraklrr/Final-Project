import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () =>{
return (
<Tab.Navigator>
<Tab.Screen name="Home" component={Dashboard}  options={{headerShown:true,headerBackVisble:false,headerTitleAlign:'center'}}/>
<Tab.Screen name="SettingsScreen" component={SettingsScreen}/>
</Tab.Navigator>
 );
};

export default TabNavigation;