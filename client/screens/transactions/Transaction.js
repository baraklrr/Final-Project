import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import TransactionService from '../../services/transaction.service';
import { useIsFocused } from '@react-navigation/native';
import { base64ArrayBuffer } from '../../helpers/bufferToBase64';

const Transaction = () => {
  const [base64Image, setBase64Image] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    TransactionService.getAll()
      .then((response) => {
        let expenses = response.data; // all expenses from server
        let imageBuffer = base64ArrayBuffer(expenses[0].expenseImg.data);
        setBase64Image(imageBuffer);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  }, [isFocused]);

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.stretch}
        source={{
          uri: `data:image/jpeg;base64,${base64Image}`,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  stretch: {
    width: 400,
    height: 400,
    resizeMode: 'stretch',
  },
});
export default Transaction;
