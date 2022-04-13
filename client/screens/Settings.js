import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Constants from 'expo-constants';
import Header from '../components/Header'
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
  
export default function Settings({ navigation }) {
return (
    
    <View style={styles.container}>
        <Header>שם העסק</Header>
        
    <TouchableOpacity >
      <Card style={styles.list}>
        <Text>תנאי שימוש</Text>
      </Card>
    </TouchableOpacity>
    
    <TouchableOpacity >
      <Card style={styles.list}>
        <Text>מדיניות פרטיות</Text>
      </Card>
    </TouchableOpacity>

    <TouchableOpacity onPress={() =>{navigation.navigate('StartScreen') }}>
      <Card style={styles.list}>
        <Text>התנתקות</Text>
      </Card>
    </TouchableOpacity>

  </View>
)
}
