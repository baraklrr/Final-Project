import * as React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import TabContainer from '../../components/TabContainer';
import { Card, Paragraph } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  Text: {
    textAlign: 'center',
  },
  list: {
    padding: 13,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
  },
});

export default function InstructionsScreen({ navigation }) {
  const Base_Url = 'https://alonbab.github.io/Pdfs/';
  const pdf1 = 'דיווח דו חודשי למעמ.pdf';
  const pdf2 = 'דיווח דו חודשי למס הכנסה.pdf';
  const pdf3 = 'הגשת דוח שנתי למס הכנסה.pdf';
  const pdf4 = 'החזרי מס עבור תרומות.pdf';
  const pdf5 = 'פתיחת תיק במס הכנסה.pdf';
  const pdf6 = 'פתיחת תיק במעמ.pdf';

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('מסמך', { url: Base_Url + pdf1, name: 'דיווח דו חודשי למעמ' });
        }}
      >
        <Card.Title style={styles.list} titleStyle={{ fontSize: 16 }} title="דיווח דו חודשי למעמ" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('מסמך', { url: Base_Url + pdf2, name: 'דיווח דו חודשי למס הכנסה' });
        }}
      >
        <Card.Title
          style={styles.list}
          titleStyle={{ fontSize: 16 }}
          title="דיווח דו חודשי למס הכנסה"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('מסמך', { url: Base_Url + pdf3, name: 'הגשת דוח שנתי למס הכנסה' });
        }}
      >
        <Card.Title
          style={styles.list}
          titleStyle={{ fontSize: 16 }}
          title="הגשת דוח שנתי למס הכנסה"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('מסמך', { url: Base_Url + pdf4, name: 'החזרי מס עבור תרומות' });
        }}
      >
        <Card.Title
          style={styles.list}
          titleStyle={{ fontSize: 16 }}
          title="החזרי מס עבור תרומות"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('מסמך', { url: Base_Url + pdf5, name: 'פתיחת תיק במס הכנסה' });
        }}
      >
        <Card.Title style={styles.list} titleStyle={{ fontSize: 16 }} title="פתיחת תיק במס הכנסה" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('מסמך', { url: Base_Url + pdf6, name: 'פתיחת תיק במעמ' });
        }}
      >
        <Card.Title style={styles.list} titleStyle={{ fontSize: 16 }} title="פתיחת תיק במעמ" />
      </TouchableOpacity>
    </ScrollView>
  );
}
