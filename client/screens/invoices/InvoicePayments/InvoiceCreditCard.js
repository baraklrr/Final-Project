import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Input } from '@rneui/themed';
import { Button } from '@rneui/base';

const InvoiceCreditCard = ({ handleSubmit }) => {
  const [cardObj, setCardObj] = useState({
    title: 'כ. אשראי',
    date: '',
    lastNumbers: '',
    sumPrice: '',
  });
  return (
    <View style={{ height: Dimensions.get('window').height }}>
      <ScrollView>
        <View
          style={{
            marginTop: 20,
            borderWidth: 1,
            borderColor: 'white',
            shadowColor: 'black',
            shadowOpacity: 2,
            shadowRadius: 6,
            shadowOffset: {
              width: 0,
              height: -4,
            },
          }}
        />

        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ marginTop: '10%' }}>
            <Input
              textAlign="right"
              textAlignVertical="center"
              disabledInputStyle={{ background: '#ddd' }}
              placeholder="תאריך החשבונית"
              onChangeText={(e) => setCardObj({ ...cardObj, date: e })}
            />
          </View>
          <View style={{ marginTop: '10%' }}>
            <Input
              textAlign="right"
              textAlignVertical="center"
              disabledInputStyle={{ background: '#ddd' }}
              placeholder="4 ספרות אחרונות של כרטיס האשראי"
              onChangeText={(e) => setCardObj({ ...cardObj, lastNumbers: e })}
            />
          </View>
          <View style={{ marginTop: '10%' }}>
            <Input
              textAlign="right"
              textAlignVertical="center"
              disabledInputStyle={{ background: '#ddd' }}
              placeholder="סכום"
              onChangeText={(e) => setCardObj({ ...cardObj, sumPrice: e })}
            />
          </View>
          <View
            style={{
              height: Dimensions.get('window').height / 5,
              justifyContent: 'flex-end',
            }}
          >
            <Button onPress={() => handleSubmit('creditCard', cardObj)}>הוספה</Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default InvoiceCreditCard;
