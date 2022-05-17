import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import Header from '../components/Header'
import TabContainer from "../components/TabContainer";
import { Card,Paragraph } from 'react-native-paper';
import {COLORS} from "../core/theme";
import AuthService from "../services/auth.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: COLORS.bg,
      padding: 8,
    },
    Text:{
      textAlign:'center'
    },
    list: {
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 5,
      marginTop: 10,
    },
  });
  
export default function Settings({ navigation }) {
  const logout =()=>{
    AsyncStorage.removeItem("user").then(()=>{
      AuthService.logout
     console.log("disconnect")
    })
 }

return (
  <TabContainer>
    <View style={styles.container}>
      <Card >
      <Header>עסק עסק</Header>
     <Paragraph style={styles.Text} >moti@xcount.com</Paragraph>
     <Paragraph style={styles.Text}>0504499805</Paragraph>
      </Card>
    <TouchableOpacity style={styles.list} >
        <Text>תנאי שימוש</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.list} >
        <Text>מדיניות פרטיות</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.list} onPress={() =>{logout()}}>
        <Text>התנתקות</Text>
    </TouchableOpacity>

  </View>
  </TabContainer>
)
}
