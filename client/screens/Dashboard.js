import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import Card from "../components/Card";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import Constants from "expo-constants";


export default function Dashboard({ navigation }) {
  return (
    <Card style={styles.cardContainer}>
      <Header>יתרה מוערכת 14,357₪</Header>

      <TouchableOpacity>
        <Card style={styles.list}>
          <Text>מקדמות מס הכנסה</Text>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity>
        <Card style={styles.list}>
          <Text>מע"מ</Text>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity>
        <Card style={styles.list}>
          <Text>ביטוח לאומי</Text>
        </Card>
      </TouchableOpacity>
    </Card>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  cardContainer:{
    width:300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  list: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 10,
  },
});

