import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { Card, Input, Divider } from '@rneui/themed';
import { List } from 'react-native-paper';
import InvoiceService from '../../services/invoice.service';

const CustomerList = ({ navigation, route }) => {
  const { setClientObj } = route.params;
  const [customers, setCustomers] = useState([]);
  const [searchArray, setSearchArray] = useState([]);

  useEffect(() => {
    loadData();
  }, [route]);

  const loadData = () => {
    InvoiceService.getAllCustomers()
      .then((response) => {
        setCustomers(response.data);
        setSearchArray(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  };

  const handleSearchByName = (search) => {
    const filteredData = customers.filter(({ customerName }) => customerName.indexOf(search) > -1);
    setSearchArray(search.length ? filteredData : customers);
  };

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
                      phone: `0${obj.customerPhone}`,
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
