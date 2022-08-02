import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import Header from '../components/Header';
import TabContainer from '../components/TabContainer';
import { Card, Paragraph } from 'react-native-paper';
import { COLORS } from '../core/theme';
import { AuthContext } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigation/RootNavigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: COLORS.bg,
    padding: 8,
  },
  Text: {
    textAlign: 'center',
  },
  list: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
  },
});


export default function Settings({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  const [user,setUser]=useState();
  const [email,setemail]=useState();
  const [phone,setphone]=useState();

  const logout = () => {
    signOut();
    console.log('disconnected');
  };
  const findUser= async()=>{ 
  const username = await AsyncStorage.getItem("username");
  const phone = await AsyncStorage.getItem("phone");
  const email = await AsyncStorage.getItem("email");
  setUser(username)
  setemail(email)
  setphone(phone)
  };
  useEffect(()=>{
    findUser();
  },[]);

  
  return (
    <TabContainer>
      <View style={styles.container}>
        <Card>
          <Header>{user}</Header>
          <Paragraph style={styles.Text}> {email} </Paragraph>
          <Paragraph style={styles.Text}> {phone} </Paragraph>
        </Card>
        <TouchableOpacity 
        style={styles.list}
        onPress={()=>navigation.navigate("aboutourapp")}>
          <Text>תנאי שימוש</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.list}
        onPress={()=>navigation.navigate("aboutourapp")}>
          <Text>מדיניות פרטיות</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.list}
          onPress={() => {
            logout();
          }}
        >
          <Text>התנתקות</Text>
        </TouchableOpacity>
      </View>
    </TabContainer>
  );
}
