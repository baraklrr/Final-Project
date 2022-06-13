import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Share } from 'react-native';
import { Card } from '@rneui/themed';
import { Button } from '@rneui/base';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';

const InvoiceFinal = ({ navigation, route }) => {
  const { sumPrice, sumPriceWithVAT, date, html } = route?.params;
  console.log(date);
  console.log(sumPrice);
  console.log(sumPriceWithVAT);

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html,
    });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  };

  return (
    <View style={styles.container}>
      <Card>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="check-circle" type="ionicon" size={70} color="lightgreen" />
        </View>
        <Header style={{ textAlign: 'center', marginTop: 15, color: 'black' }}>{date?.date}</Header>
        <Card.Title
          style={{
            textAlign: 'center',
            color: 'grey',
            marginTop: 10,
            fontSize: 14,
          }}
        >
          סכום ההכנסה (לא כולל מע"מ)
        </Card.Title>
        <Header
          style={{
            textAlign: 'center',
            fontSize: 50,
            paddingVertical: 0,
            marginTop: -15,
            color: 'black',
          }}
        >
          ₪{sumPrice}
        </Header>
        <Text style={{ opacity: 0.2 }} ellipsizeMode="clip" numberOfLines={1}>
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - - - - - - - - - - -
        </Text>

        <View style={{ padding: 5, flexDirection: 'row', marginTop: '3%' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: 'grey' }}>סכום ההכנסה (כולל מע"מ)</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'right',
                fontWeight: 'bold',
              }}
            >
              {'\u20AA'}
              {sumPriceWithVAT}
            </Text>
          </View>
        </View>
      </Card>
      <View style={styles.bottomContainer}>
        {/* <View style={{ flex: 4 }}>
          <Button
            title={'צפייה בהכנסה'}
            onPress={() => navigation.navigate('צפה בהכנסה')}
            containerStyle={{
              padding: 15,
              marginVertical: 10,
            }}
          />
        </View> */}
        <Button
          title={'שתף מסמך'}
          icon={<Icon name="upload" size={24} color="white" />}
          iconContainerStyle={{ background: '#000' }}
          onPress={printToFile}
          containerStyle={{
            padding: 15,
            marginVertical: 10,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {},
});

export default InvoiceFinal;
