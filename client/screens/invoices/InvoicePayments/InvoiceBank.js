import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Input } from '@rneui/themed';
import { Button } from '@rneui/base';

const InvoiceBank = ({ handleSubmit }) => {
  const [bankObj, setBankObj] = useState({
    title: 'העברה בנקאית',
    date: '',
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
              onChangeText={(e) => setBankObj({ ...bankObj, date: e })}
            />
          </View>
          <View style={{ marginTop: '10%' }}>
            <Input
              textAlign="right"
              textAlignVertical="center"
              disabledInputStyle={{ background: '#ddd' }}
              placeholder="סכום"
              onChangeText={(e) => setBankObj({ ...bankObj, sumPrice: e })}
            />
          </View>
          <View
            style={{
              height: Dimensions.get('window').height / 3,
              justifyContent: 'flex-end',
            }}
          >
            <Button onPress={() => handleSubmit('bank', bankObj)}>הוספה</Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default InvoiceBank;
