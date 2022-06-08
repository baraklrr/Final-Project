import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import TransactionService from '../../services/transaction.service';
import { useIsFocused } from '@react-navigation/native';
import { base64ArrayBuffer } from '../../helpers/bufferToBase64';
import { Card } from '@rneui/themed';
import { Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';

const currency = [
  { label: '€', value: '0' },
  { label: '₪', value: '1' },
  { label: '$', value: '2' },
];
const monthsShort = [
  'ינואר',
  'פברואר',
  'מרץ',
  'אפריל',
  'מאי',
  'יוני',
  'יולי',
  'אוגוסט',
  'ספטמבר',
  'אוקטובר',
  'נובמבר',
  'דצמבר',
];
const Transaction = ({ route, navigation }) => {
  const [base64Image, setBase64Image] = useState(null);
  const { data } = route.params;
  // console.log(data.name);
  // const isFocused = useIsFocused();
  const timeToString = (time) => {
    const date = new Date(time);
    const splitDate = date.toISOString().split('T')[0].split('-');
    const month = monthsShort[parseInt(splitDate[1], 10)];
    return splitDate[2] + ' ' + month + ', ' + splitDate[0];
  };
  useEffect(() => {
    let imageBuffer = base64ArrayBuffer(data.expenseImg.data);
    setBase64Image(imageBuffer);
  }, []);

  return (
    <ScrollView>
      <View>
        <Card>
          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ height: 20, width: 20 }}>
              <Text style={{ alignSelf: 'center' }}></Text>
            </View>
            <Chip
              style={{
                borderColor: `lightgreen`,
                backgroundColor: `lightgreen`,
                alignSelf: 'center',
              }}
              icon="check-circle"
            >
              {data.name}
            </Chip>
            <TouchableOpacity
              onPress={() => navigation.navigate('אפשרויות')}
              style={{
                alignSelf: 'center',
              }}
            >
              <Icon name="delete-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Header style={{ textAlign: 'center', marginTop: 15, color: 'black' }}>
            {/* 24 יולי, 2022 */}
            {timeToString(data.date)}
          </Header>
          <Text style={{ opacity: 0.2 }} ellipsizeMode="clip" numberOfLines={1}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - -
          </Text>
          <Card.Title
            style={{
              textAlign: 'center',
              color: 'grey',
              marginTop: 10,
              fontSize: 14,
            }}
          >
            סכום ההוצאה (כולל מע"מ)
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
            {currency[data.currency].label}
            {data.expenseSum}
          </Header>
          <Text style={{ opacity: 0.2 }} ellipsizeMode="clip" numberOfLines={1}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - -
          </Text>
          <View style={{ flex: 1, padding: 5, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ color: 'grey' }}>סה"כ מע"מ:</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: 'black',
                  textAlign: 'right',
                  fontWeight: 'bold',
                }}
              >
                {currency[data.currency].label}
                {(data.expenseSum * 0.17).toFixed()}
              </Text>
            </View>
          </View>
          <Text style={{ opacity: 0.2 }} ellipsizeMode="clip" numberOfLines={1}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - -
          </Text>
          <Image
            style={styles.stretch}
            source={{
              uri: `data:image/jpeg;base64,${base64Image}`,
            }}
          />
        </Card>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  stretch: {
    width: '100%',
    height: 300,
    resizeMode: 'stretch',
  },
});
export default Transaction;