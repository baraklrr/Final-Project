import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { ListItem } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as RootNavigation from '../../navigation/RootNavigation';
// import { useNavigation } from '@react-navigation/native';

const currency = [
  { label: '€', value: '0' },
  { label: '₪', value: '1' },
  { label: '$', value: '2' },
];

const Transaction_List_Item = (props) => {
  //   const navigation = useNavigation();
  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };
  const dateToDay = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0].split('-')[2];
  };
  const monthConvert = (time) => {
    const date = new Date(time);
    const splitDate = date.toISOString().split('T')[0].split('-');
    return monthsShort[parseInt(splitDate[1], 10)];
  };
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ flex: 1, flexDirection: 'column', marginTop: 20, alignItems:"center" }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 25, fontWeight:"bold" }}>{dateToDay(props.data.date)}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15 }}>{monthConvert(props.data.date)}</Text>
        </View>
      </View>

      <View style={{ flex: 4 }}>
        <TouchableOpacity
          style={{ marginRight: 10, marginTop: 20 }}
          onPress={() => {
            RootNavigation.navigate('פרטי הוצאה', { data: props.data });
          }}
        >
          <Card>
            <Card.Content>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  minHeight: 30,
                }}
              >
                {props.isExpense === false && <Icon name="menu-down" size={30} color="green" />}
                {props.isExpense === true && <Icon name="menu-up" size={30} color="red" />}
                <Text style={{ fontSize: 15 }}>{props.data.name}</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                  {currency[props.data.currency].label}
                  {props.data.expenseSum}
                </Text>
                <ListItem.Chevron
                  size={30}
                  style={{ transform: [{ rotateY: '180deg' }] }}
                  color={'black'}
                />
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});
export default Transaction_List_Item;
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
