import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateCalendar = ({ navigation, title, setCardObj, cardObj }) => {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    let formatDate = new Date(currentDate);
    setDate(formatDate);
    setCardObj({
      ...cardObj,
      date: `${formatDate.getDate().toString().padStart(2, '0')}/${(formatDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}/${formatDate.getFullYear()}`,
    });
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 10,
      }}
    >
      <View style={{ justifyContent: 'center', marginRight: '5%' }}>
        <Text style={{ fontSize: 20 }}>{title}</Text>
      </View>
      <DateTimePicker
        testID="dateTimePricker"
        value={date}
        mode={'date'}
        is24Hour={true}
        onChange={onChange}
        style={{ width: '50%' }}
      />
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default DateCalendar;
