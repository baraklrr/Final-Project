import React, { useRef ,useState } from "react";
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import TabContainer from "../components/TabContainer";
import Icon from 'react-native-vector-icons/Ionicons';
import { Card} from 'react-native-paper';

import {Picker} from '@react-native-picker/picker';

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
//for android select box 
  
export default function ReportScreen({navigation }) {

  const [selectedoption1, setSelectedoption1] = useState();
  const [selectedoption2, setSelectedoption2] = useState();
  const [selectedoption3, setSelectedoption3] = useState();
  const [selectedoption4, setSelectedoption4] = useState();
  const [selectedoption5, setSelectedoption5] = useState();
  const [selectedoption6, setSelectedoption6] = useState();
  // const [selectedoption, setSelectedoption7] = useState();
  
 const options = ['פעיל', 'ממתין לסגירה', 'סגור'];


return (
  <TabContainer>
    <ScrollView>
  <Card.Title
     style={styles.list}
     titleStyle={{fontSize:16}}
     title="ינואר - פברואר"
     right={()=>
      <Picker
      selectedValue={selectedoption1}
      style={{ height: 50, width: 170}}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedoption1(itemValue)}>
      {options.map((item, index) => (
          <Picker.Item label={item} value={index} key={index} />
        ))}
    </Picker>}
  />



<Card.Title
     style={styles.list}
     titleStyle={{fontSize:16}}
     title=" נובמבר - דצמבר"
     right={()=>
      <Picker
      selectedValue={selectedoption2}
      style={{ height: 50, width: 170}}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedoption2(itemValue)}>
      {options.map((item, index) => (
          <Picker.Item label={item} value={index} key={index} />
        ))}
    </Picker>}
  />
  

<Card.Title
     style={styles.list}
     titleStyle={{fontSize:16}}
     title=" ספטמבר - אוקטובר"
     right={()=>
      <Picker
      selectedValue={selectedoption3}
      style={{ height: 50, width: 170}}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedoption3(itemValue)}>
      {options.map((item, index) => (
          <Picker.Item label={item} value={index} key={index} />
        ))}
    </Picker>}
  />

<Card.Title
     style={styles.list}
     titleStyle={{fontSize:16}}
     title=" יולי - אוגוסט "
     right={()=>
      <Picker
      selectedValue={selectedoption4}
      style={{ height: 50, width: 170}}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedoption4(itemValue)}>
      {options.map((item, index) => (
          <Picker.Item label={item} value={index} key={index} />
        ))}
    </Picker>}
  />


<Card.Title
     style={styles.list}
     titleStyle={{fontSize:16}}
     title=" מאי - יוני"
     right={()=>
      <Picker
      selectedValue={selectedoption5}
      style={{ height: 50, width: 170}}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedoption5(itemValue)}>
      {options.map((item, index) => (
          <Picker.Item label={item} value={index} key={index} />
        ))}
    </Picker>}
  />
  <Card.Title
     style={styles.list}
     titleStyle={{fontSize:16}}
     title=" מרץ - אפריל"
     right={()=>
      <Picker
      selectedValue={selectedoption6}
      style={{ height: 50, width: 170}}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedoption6(itemValue)}>
      {options.map((item, index) => (
          <Picker.Item label={item} value={index} key={index} />
        ))}
    </Picker>}
  />
  </ScrollView>
</TabContainer>
)
}
