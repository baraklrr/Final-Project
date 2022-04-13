import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  list: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
  },
});


export default function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
    <Header>יתרה מוערכת 14,357₪</Header>
    
<TouchableOpacity >
  <Card style={styles.list}>
    <Text>מס הכנסה</Text>
  </Card>
</TouchableOpacity>

<TouchableOpacity >
  <Card style={styles.list}>
    <Text>מע"מ</Text>
  </Card>
</TouchableOpacity>

<TouchableOpacity >
  <Card style={styles.list}>
    <Text>ביטוח ללאומי</Text>
  </Card>
</TouchableOpacity>

</View>
  )
}
