import React ,{useEffect, useState} from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button';



export default function MyProfileScreen(props) {
  const [user,setUser]=useState();
  const [email,setemail]=useState();
  const [phone,setphone]=useState();

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
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      showsVerticalScrollIndicator={false}>
      <Image
        style={styles.userImg}
        source={require('../../assets/mybuissnes.png')}
      />
      <Text style={styles.userName}>שם:  {user}</Text>
      <Text style={styles.aboutUser}>אימייל :{email} </Text>
      <Text style={styles.aboutUser}>נייד : {phone ? phone:"לא נרשם"} </Text>
      <Text style={styles.aboutUser}>שם העסק: {phone ? phone:"לא נרשם"} </Text>
      <Text style={styles.aboutUser}>כתובת העסק : {phone ? phone:"לא נרשם"} </Text>
      <Text style={styles.aboutUser}>מספר הטלפון של העסק : {phone ? phone:"לא נרשם"} </Text>
      <Button mode="outlined">
        ערוך פרטים
        </Button>
      </ScrollView>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },

});
