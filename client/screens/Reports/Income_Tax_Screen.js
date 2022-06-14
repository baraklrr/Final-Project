import React, { useRef, useState,useEffect,useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView ,FlatList,RefreshControl} from 'react-native';

import { List, Chip } from 'react-native-paper';
import TabContainer from '../../components/TabContainer';
import { COLORS } from '../../core/theme';
import Constants from 'expo-constants';
import ExpenseDataService from '../../services/expense.service';
import InvoiceDataService from '../../services/invoice.service'; 

const Income_Tax_Screen = ({route}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);


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



  useEffect(() => {
   // console.log('loading Data');
    loadData1();
    loadData2();
  }, [route]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadData1();
    loadData2();
  }, []);


  const loadData1 = () => {
    ExpenseDataService.getbyMonthSum().then((data)=>{
      setExpenses(data.data)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data); // => the response payload
      }
    });
  };
   const loadData2 = () => {
    InvoiceDataService.getbyMonthSum().then((data)=>{
      setIncome(data.data)
      setRefreshing(false);
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data); // => the response payload
      }
    });
  };
  
  var allData= expenses.reduce((arr,e)=>{
    arr.push(Object.assign({},e,income.find(a=>a.month==e.month)?income.find(a=>a.month==e.month):{"incomeSum":0}
    ))
    return arr;
   },[]).sort((a, b) => a.month.split('-')[0] - b.month.split('-')[0])
   
   console.log(allData)

  return (
    <TabContainer>

    <FlatList
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    data={allData && allData.length > 0 ? allData : []}
    renderItem={({ item }) => (
          <List.Section>
              <List.Accordion
              
                titleStyle={{ color: 'black', fontWeight: 'bold' }}
                title= {monthsShort[parseInt(item.month.split('-')[0])-1] +' '+ item.month.split('-')[1]}
                left={(props) => (
                  <Chip
                    style={{
                      borderColor: `lightblue`,
                      backgroundColor: `lightblue`,
                      alignSelf: 'center',
                    }}
                  >
                    {parseInt((item.incomeSum -parseInt(item.expenseSum * 0.3))*0.3)}  ₪
                  </Chip>
                )}
              >
                  <List.Item
                title="סך הכנסות חייבות במס -"
                titleStyle={{ marginLeft: 20, fontWeight: 'bold' }}
                right={() => (
                  <Text
                    style={{
                      color: '#274c77',
                      textAlignVertical: 'center',
                      marginRight: 15,
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}
                  >
                   ₪{item.incomeSum}
                  </Text>
                )}
              />
              <List.Item
                title="סך הוצאות מוכרות למס -"
                titleStyle={{ marginLeft: 20, fontWeight: 'bold' }}
                right={() => (
                  <Text
                    style={{
                      color: '#274c77',
                      textAlignVertical: 'center',
                      marginRight: 15,
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}
                  >
                   ₪{item.expenseSum}
                  </Text>
                )}
              />
              <List.Item
                title="סך קיזוז למס -"
                titleStyle={{ marginLeft: 20, fontWeight: 'bold' }}
                right={() => (
                  <Text
                    style={{
                      color: '#274c77',
                      textAlignVertical: 'center',
                      marginRight: 15,
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}
                  >
                    
                    ₪ {parseInt(item.expenseSum * 0.3)}
                  </Text>
                )}
              />
              <List.Item
                title="סך הפרשים למס -"
                titleStyle={{ marginLeft: 20, fontWeight: 'bold' }}
                right={() => (
                  <Text
                    style={{
                      color: '#274c77',
                      textAlignVertical: 'center',
                      marginRight: 15,
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}
                  >
                   ₪{ item.incomeSum -parseInt(item.expenseSum * 0.3)}
                  </Text>
                )}
              />
                </List.Accordion>
        </List.Section>
    )}
    ItemSeparatorComponent={() => <List.Section/>}
  />

</TabContainer>

  )
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#efefef',
    padding: 20,
  },
  overflow: {
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 6,
  },
  button: {
    padding: 10,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
  textContainer: {
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    marginBottom: 60,
  },
});
export default Income_Tax_Screen;
