import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import TabContainer from "../components/TabContainer";
import Icon from 'react-native-vector-icons/Ionicons';
import { Card,Paragraph } from 'react-native-paper';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: 'white',
      padding: 8,
    },
    Text:{
      textAlign:'center'
    },
    list: {
      padding: 13,
      backgroundColor: 'white',
      borderRadius: 5,
      marginTop: 10,
    },
  });
  
export default function ReportScreen({navigation }) {
return (
  <TabContainer>
    <ScrollView>
  <Card.Title
     style={styles.list}
     titleStyle={{fontSize:16}}
     title="ינואר - פברואר"
    // right={() => <Icon name="chevron-back-outline" color="#212121" size={27} />}
  />
<Card.Title
     style={styles.list}
     titleStyle={{fontSize:16}}
     title=" נובמבר - דצמבר"
    // right={() => <Icon name="chevron-back-outline" color="#212121" size={27} />}
  />

<Card.Title
     style={styles.list}
     titleStyle={{fontSize:16}}
     title=" ספטמבר - אוקטובר"
     //right={() => <Icon name="chevron-back-outline" color="#212121" size={27} />}
  />


<Card.Title
     style={styles.list}
     titleStyle={{fontSize:16}}
     title=" יולי - אוגוסט "
  //   right={() => <Icon name="chevron-back-outline" color="#212121" size={27} />}
  />


<Card.Title
     style={styles.list}
     titleStyle={{fontSize:16}}
     title=" מאי - יוני"
     //right={() => <Icon name="chevron-back-outline" color="#212121" size={27} />}
  />
  <Card.Title
     style={styles.list}
     titleStyle={{fontSize:16}}
     title=" מרץ - אפריל"
     //right={() => <Icon name="chevron-back-outline" color="#212121" size={27} />}
  />
  <Card.Title
     style={styles.list}
     titleStyle={{fontSize:16}}
     title=" ינואר-פברואר"
    // right={() => <Icon name="chevron-back-outline" color="#212121" size={27} />}
  />
  </ScrollView>
</TabContainer>
)
}
