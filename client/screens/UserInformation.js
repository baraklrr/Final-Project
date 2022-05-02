import * as React from 'react';

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import Header from '../components/Header'
import TabContainer from "../components/TabContainer";
import { Card,Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f2f2f2',
      padding: 8,
    },
    Text:{
      textAlign:'center'
    },
    list: {
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 5,
      marginTop: 10,
      
    },
  
  });
  
export default function Settings({ navigation }) {
return (
  <ScrollView>
  <TabContainer>
    <View style={styles.container}>
      <Card >
      <Card.Content>
      <Header>עסק עסק</Header>
     <Paragraph style={styles.Text} >moti@xcount.com</Paragraph>
     <Paragraph style={styles.Text}>0504499805</Paragraph>
     </Card.Content>
      </Card>

  <TouchableOpacity onPress={()=>{navigation.navigate("הדיווחים שלי")}}>
      <Card.Title
     style={styles.list}
     titleStyle={{fontSize:16}}
     title="הדיווחים שלי"
     left={() => <Icon name="md-today-outline" color="#212121" size={27} />}
     right={() => <Icon name="chevron-back-outline" color="#212121" size={27} />}
  />
  </TouchableOpacity>


  <TouchableOpacity onPress={()=>{navigation.navigate("המסמכים שלי")}} >
    <Card.Title
     style={styles.list}
     title="מגירת מסמכים"
     titleStyle={{fontSize:16}}
     left={() => <Icon name="file-tray-outline" color="#212121" size={27} />}
     right={() => <Icon name="chevron-back-outline" color="#212121" size={27} />}
     
  />
  </TouchableOpacity>

  <TouchableOpacity  onPress={()=>{navigation.navigate("ערוך את הפרטים שלי")}}>
    <Card.Title
     style={styles.list}
     titleStyle={{fontSize:16}}
     title="ערוך פרטים אישיים"
     left={() => <Icon name="md-pencil" color="#212121" size={27} />}
     right={() => <Icon name="chevron-back-outline" color="#212121" size={27} />}/>
  </TouchableOpacity>

    <Card style={styles.list} >
    <Text> עמלת ביטוח </Text>
    <Text>ריבית ושוק ההון </Text>
    <Text> סוגי שכר מסוימים </Text>

    </Card>

  </View>
  
  </TabContainer>
  </ScrollView>

)
}
