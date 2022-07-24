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
import AuthService from '../../services/auth.service'
import { nameValidator } from '../../helpers/nameValidator';


export default function EditMyProfile({ navigation }) {
    const [user,setUser]=useState();
    const [phone,setphone]=useState();
    const [address,setaddress]=useState();
    const [buissnessname,setbuissnessname]=useState();

const updateOnclick = async()=>{
  AuthService.updateUser(data);
  navigation.goBack()
}



    const findUser= async()=>{ 
        const username = await AsyncStorage.getItem("username");
        const address = await AsyncStorage.getItem("businessAddress");
        const phone = await AsyncStorage.getItem("phone");
        const buissnessname = await AsyncStorage.getItem("businessName");
        setUser(username)
        setphone(phone)
        setaddress(address);
        setbuissnessname(buissnessname);
        };
        useEffect(()=>{ findUser(); },[]);

        const data = {
          'username':user,
          'phoneNumber':phone,
          'businessName':buissnessname,
          'businessAddress':address,
        }
        console.log(data)

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
         value={user}
         onChangeText={(text) => setUser( text)} />

    
        <TextInput
          label="נייד"
          keyboardType='numeric'
         returnKeyType="next"
         value={phone}
         onChangeText={(text) => setphone(text)} />
        

        <TextInput
          label="שם העסק"
         returnKeyType="next"
         value={buissnessname} 
         onChangeText={(text) => setbuissnessname(text)}/>

         <TextInput
          label="כתובת העסק"
         returnKeyType="next"
         value={address}
         onChangeText={(text) => setaddress(text)} />


      <View style={{ flexDirection:"row", margin:10}}>
      <Button mode="contained" style={{marginHorizontal: 10,width: '50%' }} 
      onPress={() => updateOnclick()}> עדכן </Button>
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

