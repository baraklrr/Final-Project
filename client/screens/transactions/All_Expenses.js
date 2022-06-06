import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import TransactionService from '../../services/transaction.service';
import Transaction_List_Item from './Transaction_List_Item';

const All_Expenses = () => {
  const [search, setSearch] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    TransactionService.getAll()
      .then((response) => {
        console.log('expenses loaded');
        setExpenses(response.data); // all expenses from server
        setfilteredData(response.data); // all expenses from server
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  }, []);

  const updateSearch = (searchText) => {
    setSearch(searchText);
    // console.log(expenses[0].name);

    let filteredData = expenses.filter((item) => {
      return item.name.includes(searchText);
    });
    setfilteredData(filteredData);
    // console.log(filteredData.length > 0 ? filteredData[0].id : 'sd');
  };
  return (
    <View style={styles.container}>
      <Searchbar
        style={{ marginTop: 15 }}
        placeholder="חיפוש..."
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={updateSearch}
        value={search}
      />
      <FlatList
        data={filteredData && filteredData.length > 0 ? filteredData : []}
        keyExtractor={(item) => `item-${item.id}`}
        renderItem={({ item }) => <Transaction_List_Item isExpense={true} data={item} />}
        ItemSeparatorComponent={() => <View/>}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default All_Expenses;
