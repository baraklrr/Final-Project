import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import MyBuissnessScreen from '../screens/myBuisness/MyBuisnessScreen';
import MyProfileScreen from '../screens/myBuisness/MyProfileScreen';
import EditMyProfile from '../screens/myBuisness/EditMyProfile';
import Myfiles from '../screens/myBuisness/MyFiles';
import InstructionScreen from '../screens/myBuisness/InstructionsScreen';
import ReportsNavigation from './ReportsNavigation';
import DocViewer from '../screens/files/DocViewer';
const Stack = createStackNavigator();

const MybuissnessNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { alignItems: 'center' },
        headerStyle: {},
        headerBackTitleStyle: {
          color: 'transparent',
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="העסק שלי" component={MyBuissnessScreen} />
      <Stack.Screen name="הדיווחים שלי" component={ReportsNavigation} />
      <Stack.Screen name="פרטי העסק שלי" component={MyProfileScreen} />
      <Stack.Screen name="ערוך את פרטי העסק" component={EditMyProfile} />
      <Stack.Screen name="המסמכים שלי" component={Myfiles} />
      <Stack.Screen name="נהלים" component={InstructionScreen} />
      <Stack.Screen
        name="מסמך"
        component={DocViewer}
        options={({ route }) => ({ title: route.params.name , url: route.params.url })}
      />
    </Stack.Navigator>
  );
};

export default MybuissnessNavigator;
