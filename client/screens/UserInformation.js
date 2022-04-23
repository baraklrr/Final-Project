import React from 'react'
import { View, Text } from 'react-native'
import TabContainer from "../components/TabContainer";

export default function NotificationScreen({ navigation }){
  return (
    <TabContainer>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>information</Text>
    </View>
    </TabContainer>
    );
}