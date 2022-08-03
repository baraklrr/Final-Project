import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import MyBuisnessScreen from '../screens/myBuisness/MyBuisnessScreen';
import MyProfileScreen from '../screens/myBuisness/MyProfileScreen';
import EditMyProfile from '../screens/myBuisness/EditMyProfile';
import MyFiles from '../screens/myBuisness/MyFiles';
import InstructionsScreen from '../screens/myBuisness/InstructionsScreen';
import CategoriesScreen from '../screens/myBuisness/CategoriesScreen';
import ReportsNavigation from './ReportsNavigation';
import DocViewer from '../screens/files/DocViewer';
import updateCategory from '../screens/myBuisness/UpdateCategory';

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
      <Stack.Screen name="העסק שלי" component={MyBuisnessScreen} />
      <Stack.Screen name="הדיווחים שלי" component={ReportsNavigation} />
      <Stack.Screen name="פרטי העסק שלי" component={MyProfileScreen} />
      <Stack.Screen name="ערוך את פרטי העסק" component={EditMyProfile} />
      <Stack.Screen name="המסמכים שלי" component={MyFiles} />
      <Stack.Screen name="נהלים" component={InstructionsScreen} />
      <Stack.Screen name="קטגוריות" component={CategoriesScreen} />
      <Stack.Screen name="UpdateCategory" component={updateCategory} options={{title:"עדכון קטגוריה"}}/>
      <Stack.Screen
        name="מסמך"
        component={DocViewer}
        options={({ route }) => ({ title: route.params.name, url: route.params.url })}
      />
    </Stack.Navigator>
  );
};

export default MybuissnessNavigator;
