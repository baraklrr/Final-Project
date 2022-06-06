import React,  { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from '../screens/Dashboard';
import NotificationScreen from '../screens/NotificationScreen';
import SettingNavigation from './SettingNavigation';
import MyBuissnessNavigator from '../navigation/MyBuissnessNavigator';
import MyBuissnessScreen from '../screens/MyBuissnessScreen';
import { useTabMenu } from '../context/TabContext';
import AddButton from '../components/AddButton';
import { COLORS } from '../core/theme';
import SettingsScreen from '../screens/Settings';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const getIconColor = (focused) => ({
  tintColor: focused ? COLORS.primary : COLORS.dark,
});

export default function TabNavigation ()
{
  const { opened, toggleOpened } = useTabMenu();
  const [user,setUser]=useState();
  const [greet,setGreet] = useState('ערב');

  const findGreet=()=>{
    const hrs=new Date().getHours();
    if(hrs===0 || hrs<12)
    setGreet('בוקר טוב')
    if(hrs>12 || hrs<21)
    setGreet(' צהריים טובים')
  }
  const findUser= async()=>{ 
  const username = await AsyncStorage.getItem("username");
  setUser(username)
  };

  useEffect(()=>{
  findUser();
  findGreet();
  },[]);

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: true,
        tabBarLabelStyle: styles.tabLabel,
        headerTitleAlign: 'center',
        tabBarStyle: styles.tabBar,
        headerTitleStyle: { alignItems: 'center' },
        headerStyle: {
          height: 120,
        },
        headerBackTitleStyle: {
          color: 'transparent',
        },
        headerBackTitleVisible: false,
      }}
    >
      <Tab.Screen
        name="בית"
        component={Dashboard}
        options={{
          headerTitle: user  + ' ,'+ greet ,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require('../assets/images/Home.png')}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              />
            </View>
          ),
        }}
        listeners={{
          tabPress: (e) => opened && e.preventDefault(),
        }}
      />

      <Tab.Screen
        name="ניהול עסק"
        component={MyBuissnessNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require('../assets/images/person.png')}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              />
            </View>
          ),
        }}
        listeners={{
          tabPress: (e) => opened && e.preventDefault(),
        }}
      />

      <Tab.Screen
        name="הוספה"
        component={Dashboard}
        options={{ tabBarButton: () => <AddButton opened={opened} toggleOpened={toggleOpened} /> }}
        listeners={{
          tabPress: (e) => opened && e.preventDefault(),
        }}
      />

      <Tab.Screen
        name="התראות"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require('../assets/images/notification.png')}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              />
            </View>
          ),
        }}
        listeners={{
          tabPress: (e) => opened && e.preventDefault(),
        }}
      />

      <Tab.Screen
        name="הגדרות"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require('../assets/images/Setting.png')}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              />
            </View>
          ),
        }}
        listeners={{
          tabPress: (e) => opened && e.preventDefault(),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    padding: 0,
    // left: 16,
    // right: 16,
    // bottom: 32,
    height: 56,
    // borderRadius: 16,
    backgroundColor: COLORS.white,
    borderTopColor: 'transparent',
    shadowColor: COLORS.dark,
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // elevation: 3,
  },
  tabIconContainer: {
    position: 'absolute',
    top: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    marginBottom: 6,
  },
  tabIcon: {
    width: 32,
    height: 32,
  },
});


