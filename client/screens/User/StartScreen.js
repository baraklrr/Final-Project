import React, { useEffect, useState } from "react";
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StartScreen({ navigation }) {
  // const [currentUser, setCurrentUser] = useState(undefined);
  // useEffect(() => {
  //   AsyncStorage.getItem('user').then((value) => {
  //     if (value) {
  //       setCurrentUser(JSON.parse(value));
  //       navigation.replace("Dashboard");
  //     }else{
  //       console.log('blat')
  //     }
  //   });
  // }, []);

  return (
    <Background>
      <Logo />
      <Header>Xcount</Header>
      <Paragraph>
        הצטרך עכשיו לאפליקציה שמחליפה את רואה החשבון שלך
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        התחברות
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")}
      >
      הרשמה
      </Button>
    </Background>
  );
}
