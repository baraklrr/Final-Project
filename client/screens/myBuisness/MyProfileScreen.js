import React, { useEffect, useState } from 'react';
import { Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button';
import { COLORS } from '../../core/theme';

export default function MyProfileScreen({ navigation }) {
  const [user, setUser] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [address, setaddress] = useState();
  const [buissnessname, setbuissnessname] = useState();
  const [buissnessPhone, setbuissnessPhone] = useState();

  const findUser = async () => {
    const username = await AsyncStorage.getItem('username');
    const phone = await AsyncStorage.getItem('phone');
    const email = await AsyncStorage.getItem('email');
    const address = await AsyncStorage.getItem('businessAddress');
    const bname = await AsyncStorage.getItem('businessName');
    console.log(bname);

    setUser(username);
    setemail(email);
    setphone(phone);
    setaddress(address);
    setbuissnessname(bname);
  };
  useEffect(() => {
    findUser();
  }, []);

  console.log(phone);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
      >
        <Image style={styles.userImg} source={require('../../assets/mybuissnes.png')} />
        <Text style={styles.userName}>שם: {user}</Text>
        <Text style={styles.aboutUser}>אימייל :{email} </Text>
        <Text style={styles.aboutUser}>נייד : {phone ? phone : 'לא נרשם'} </Text>
        <Text style={styles.aboutUser}>שם העסק: {buissnessname ? buissnessname : 'לא נרשם'} </Text>
        <Text style={styles.aboutUser}>כתובת העסק : {address ? address : 'לא נרשם'} </Text>
        <Button
          mode="outlined"
          onPress={() => {
            navigation.navigate('ערוך את פרטי העסק');
          }}
        >
          ערוך פרטים
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
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
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
});
