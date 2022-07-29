import React, { useCallback, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { Card, Input, Divider } from '@rneui/themed';
import { List } from 'react-native-paper';

const mockCustomerList = [
  {
    customerId: 123456789,
    customerName: 'אופיר בע״מ',
    customerPhone: "0547234107"
  },
  {
    customerId: 987654321,
    customerName: 'ברק בע״מ',
    customerPhone: "0547234105"
  },
  {
    customerId: 123123123,
    customerName: 'קורל בע״מ',
    customerPhone: "0547234104"
  },
  {
    customerId: 456456456,
    customerName: 'לוריין בע״מ',
    customerPhone: "0547234103"
  },
  {
    customerId: 123789456,
    customerName: 'ברזלים בע״מ',
    customerPhone: "0547234102"
  },
  {
    customerId: 444444444,
    customerName: 'מברגים בע״מ',
    customerPhone: "0547234101"
  },
];

const CustomerList = ({ navigation, route }) => {
  const { setClientObj } = route.params;
  const [searchArray, setSearchArray] = useState(mockCustomerList);

  const handleSearchByName = useCallback((search) => {
    const filteredData = mockCustomerList.filter(
      ({ customerName }) => customerName.indexOf(search) > -1
    );
    setSearchArray(search.length ? filteredData : mockCustomerList);
  }, []);

  return (
    <View>
      <Card>
        <Input
          textAlign="center"
          textAlignVertical="center"
          maxLength={24}
          disabledInputStyle={{ background: '#ddd' }}
          placeholder="חיפוש"
          onChangeText={handleSearchByName}
        ></Input>
        <ScrollView>
          {searchArray.map((obj) => {
            return (
              <List.Section key={obj.customerId}>
                <TouchableOpacity
                  onPress={() => {
                    setClientObj({
                      name: obj.customerName,
                      phone: obj.customerPhone,
                      companyNumber: `${obj.customerId}`,
                    });
                    navigation.navigate('חשבונית מס/קבלה');
                  }}
                >
                  <List.Item
                    title={obj.customerName}
                    description={obj.customerId}
                    left={(props) => <List.Icon {...props} icon="equal" />}
                  />
                </TouchableOpacity>
                <Text style={{ color: 'gray' }}>___________________________________________</Text>
              </List.Section>
            );
          })}
        </ScrollView>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomerList;
