import React, { useEffect, useState } from "react";
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";

export default function StartScreen({ navigation }) {


  return (
    <Background>
      <Logo />
      <Header>Xcount</Header>
      <Paragraph style={{fontWeight:'bold',marginBottom: 10,fontSize: 16}}>
        הצטרף עכשיו לאפליקציה שמחליפה את רואה החשבון שלך
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
