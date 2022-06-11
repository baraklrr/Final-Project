import * as React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import TabContainer from '../components/TabContainer';
import { Card, Paragraph } from 'react-native-paper';
import { WebView } from 'react-native-webview';

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


  function DocViewer({ route }) {
  return (
    <WebView
      source={{
        uri: 'http://docs.google.com/gview?embedded=true&url=https://www.gov.il/BlobFolder/service/refund-for-representatives-class-action/he/Service_Pages_Income_tax_representative-refund_single.pdf',
        // url can be a web link or path to your file local ('file:///...')
    }} />
  );
}

export default function InstructionScreen({ navigation }) {
  return (
      <ScrollView>
        <TouchableOpacity onPress={()=>{
            return  <WebView
            source={{
              uri: 'http://docs.google.com/gview?embedded=true&url=https://www.gov.il/BlobFolder/service/refund-for-representatives-class-action/he/Service_Pages_Income_tax_representative-refund_single.pdf',
              // url can be a web link or path to your file local ('file:///...')
          }} />
        }}>
          <Card.Title
            style={styles.list}
            titleStyle={{ fontSize: 16 }}
            title="פתיחת תיק מעמ"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}>
        <Card.Title
          style={styles.list}
          titleStyle={{ fontSize: 16 }}
          title="דיווח דו חודשי מעמ"
        />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}>
        <Card.Title
          style={styles.list}
          titleStyle={{ fontSize: 16 }}
          title="פתיחת תיק מס הכנסה"
        />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{}}>
<Card.Title
          style={styles.list}
          titleStyle={{ fontSize: 16 }}
          title="דיווח דו חודשי למס הכנסה"
        />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}>
<Card.Title
          style={styles.list}
          titleStyle={{ fontSize: 16 }}
          title="הגשת דוח מס הכנסה"
        />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}}>

<Card.Title
          style={styles.list}
          titleStyle={{ fontSize: 16 }}
          title="החזרי מס עבור תרומות"
        />
         </TouchableOpacity>

      </ScrollView>
  );
}
