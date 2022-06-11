import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import InvoiceService from '../../services/invoice.service';
import Transaction_List_Item from './Transaction_List_Item';
import TabContainer from '../../components/TabContainer';

const All_Incomes = ({ navigation, route }) => {
  const [search, setSearch] = useState('');
  const [incomes, setIncomes] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const isFocused = useIsFocused();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    console.log('loading Data');
    loadData();
  }, [route]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadData();
  }, []);

  const loadData = () => {
    InvoiceService.getAll()
      .then((response) => {
        setIncomes(response.data);
        setfilteredData(response.data);
        setRefreshing(false);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  };

  const updateSearch = (searchText) => {
    setSearch(searchText);

    let filteredData = incomes.filter((item) => {
      return item.description.includes(searchText);
    });
    setfilteredData(filteredData);
  };

  return (
    <TabContainer>
      <View style={styles.screenContainer}>
        <Searchbar
          style={{ margin: 15 }}
          placeholder="חיפוש..."
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={updateSearch}
          value={search}
        />
        <FlatList
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          data={filteredData && filteredData.length > 0 ? filteredData : []}
          keyExtractor={(item) => `item-${item.id}`}
          renderItem={({ item }) => <Transaction_List_Item isExpense={false} data={item} />}
          ItemSeparatorComponent={() => <View />}
        />
      </View>
    </TabContainer>
  );
};
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginBottom: 60,
  },
});
export default All_Incomes;
