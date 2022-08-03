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

export default function MyFiles({ navigation }) {
  return (
    <TabContainer>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('מסמך');
          }}
        >
          <Card.Title
            style={styles.list}
            titleStyle={{ fontSize: 16 }}
            title="טופס ביטוח לאומי"
            right={() => <Paragraph style={styles.Text}>4 אוקטובר 2021</Paragraph>}
          />
        </TouchableOpacity>
        <Card.Title
          style={styles.list}
          titleStyle={{ fontSize: 16 }}
          title=" אישור עוסק"
          right={() => <Paragraph style={styles.Text}>4 אוקטובר 2021</Paragraph>}
        />

        <Card.Title
          style={styles.list}
          titleStyle={{ fontSize: 16 }}
          title="טופס מס הכנסה"
          right={() => <Paragraph style={styles.Text}>4 אוקטובר 2021</Paragraph>}
        />
      </ScrollView>
    </TabContainer>
  );
}
