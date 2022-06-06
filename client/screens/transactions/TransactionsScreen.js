import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TransactionHeader from '../transactions/TransactionHeader';
import AllTransactions from './AllTransactions';

const TransactionsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <TransactionHeader />
      <AllTransactions />
    </View>
  );
};
const styles = StyleSheet.create({});
export default TransactionsScreen;
