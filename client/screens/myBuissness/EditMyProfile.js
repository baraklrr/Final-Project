import React ,{useEffect, useState} from "react";
import {
    View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaProvider,
} from 'react-native';
import NumberFormat from 'react-number-format';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextInput from "../../components/TextInput";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button';
import { COLORS } from '../../core/theme';


export default function EditMyProfile({ navigation }) {
    const [user,setUser]=useState();
    const [email,setemail]=useState();
    const [phone,setphone]=useState();
    const [address,setaddress]=useState();
    const [buissnessname,setbuissnessname]=useState();

    const findUser= async()=>{ 
        const username = await AsyncStorage.getItem("username");
        const address = await AsyncStorage.getItem("businessAddress");
        const phone = await AsyncStorage.getItem("phone");
        const email = await AsyncStorage.getItem("email");
        const buissnessname = await AsyncStorage.getItem("businessName");
        setUser(username)
        setemail(email)
        setphone(phone)
        setaddress(address);
        setbuissnessname(buissnessname);
        
        };
        
        useEffect(()=>{
          findUser();
        },[]);
return (
  <KeyboardAvoidingView style={styles.container} >
  <ScrollView
      style={styles.container}
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      showsVerticalScrollIndicator={false}>
      <Image
        style={styles.userImg}
        source={require('../../assets/mybuissnes.png')}/>
       <TextInput
          label="שם"
         returnKeyType="next"
         value={user} />

    
        <TextInput
          label="נייד"
          keyboardType='numeric'
         returnKeyType="next"
         value={phone} />
        

        <TextInput
          label="שם העסק"
         returnKeyType="next"
         value={buissnessname} />

         <TextInput
          label="כתובת העסק"
         returnKeyType="next"
         value={address} />

      <View style={{ flexDirection:"row", margin:10}}>
      <Button mode="contained" style={{marginHorizontal: 10,width: '50%' }} 
      onPress={() => navigation.goBack()}> עדכן </Button>
      <Button mode="contained" style={{marginHorizontal: 10,width: '50%'}}
      onPress={() => navigation.goBack()}> בטל </Button>
      </View>
         
      </ScrollView>
      </KeyboardAvoidingView>

    );


}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.bg,
      padding:20,
    },
    userImg: {
      height: 60,
      width: 60,
    },
});

