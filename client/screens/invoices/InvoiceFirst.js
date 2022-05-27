import React, { useState, useRef, useEffect } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Input, Divider } from '@rneui/themed';
import { Button } from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Checkbox, DataTable } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import InvoiceTextInput from '../../components/InvoiceTextInput';
import CustomDivider from '../../components/CustomDivider';
import DateCalendar from '../../components/DateCalendar';

const InvoiceFirst = ({ navigation, route }) => {
  const [checked, setChecked] = React.useState(false);
  const [vat, setVat] = useState();
  const [currency, setCurrency] = useState();
  const [dataTableValues, setDataTableValues] = useState([]);
  const [paymentTableValues, setPaymentTableValues] = useState([]);
  const [sumPrice, setSumPrice] = useState(0);
  const [sumPricePayment, setSumPricePayment] = useState(0);
  const [isSum, setIsSum] = useState(false);
  const [isSumPayment, setIsSumPayment] = useState(false);
  const [clientObj, setClientObj] = useState({
    name: '',
    phone: '',
    companyNumber: '',
  });
  const [date, setDate] = useState({
    date: `${new Date().getDate().toString().padStart(2, '0')}/${(new Date().getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${new Date().getFullYear()}`,
  });

  useEffect(() => {
    if (isSum) {
      dataTableValues.map((obj) =>
        setSumPrice(Number(sumPrice) + Number(obj?.price) * Number(obj?.intity))
      );
      setIsSum(false);
    }
  }, [dataTableValues]);

  useEffect(() => {
    route?.params?.payment &&
      setPaymentTableValues([...paymentTableValues, route?.params?.payment]);
  }, [route?.params?.payment]);

  useEffect(() => {
    if (isSumPayment) {
      paymentTableValues.map((obj) =>
        setSumPricePayment(Number(sumPricePayment) + Number(obj?.sumPrice))
      );
      setIsSumPayment(false);
    }
  }, [paymentTableValues]);

  const pickerRef = useRef();

  const open = () => {
    pickerRef.current.focus();
  };

  const close = () => {
    pickerRef.current.blur();
  };

  return (
    <ScrollView>
      <View></View>
      <View>
        <Card>
          <Input
            textAlign="center"
            textAlignVertical="center"
            maxLength={24}
            disabledInputStyle={{ background: '#ddd' }}
            placeholder="תיאור ההכנסה"
          ></Input>
          {/* <DateSelect /> */}
          {/* <DateCalendar title="תאריך: " setCardObj={setDate} cardObj={date} /> */}

          <CustomDivider />
          <Card.Title style={{ textAlign: 'left' }}>לכבוד</Card.Title>
          {/* <TouchableOpacity> */}
          <Input
            textAlign="right"
            textAlignVertical="center"
            disabledInputStyle={{ background: '#ddd' }}
            rightIcon={<Icon name="account-plus" size={20} />}
            icon
            placeholder="שם"
            onChangeText={(e) => setClientObj({ ...clientObj, name: e })}
          />
          {/* </TouchableOpacity> */}
          <Input
            textAlign="right"
            textAlignVertical="center"
            disabledInputStyle={{ background: '#ddd' }}
            rightIcon={<Icon name="phone" size={20} />}
            placeholder="טלפון"
            keyboardType="number-pad"
            onChangeText={(e) => setClientObj({ ...clientObj, phone: e })}
          />
          <Input
            textAlign="right"
            textAlignVertical="center"
            disabledInputStyle={{ background: '#ddd' }}
            placeholder="מספר עוסק או ח.פ"
            keyboardType="number-pad"
            onChangeText={(e) => setClientObj({ ...clientObj, companyNumber: e })}
          />
          {/* <Input
            textAlign="right"
            textAlignVertical="center"
            disabledInputStyle={{ background: '#ddd' }}
            placeholder="כתובת עסק"
          /> */}
          {/* <Input
            textAlign="right"
            textAlignVertical="center"
            disabledInputStyle={{ background: '#ddd' }}
            placeholder="אימייל"
            keyboardType="email-address"
          /> */}
          <Checkbox.Item
            label="שמור לקוח לפעם הבאה"
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <CustomDivider />

          <Card.Title style={{ textAlign: 'left' }}>פירוט עסקה ושירותים</Card.Title>

          {/* <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <RNPickerSelect
                placeholder={{}}
                ref={pickerRef}
                items={[
                  {
                    label: 'רגיל (17%)',
                    value: 'vatInculeded',
                  },
                  {
                    label: 'סתם',
                    value: 'vatNotInculeded',
                  },
                ]}
                onValueChange={(value) => {
                  setVat(value);
                }}
                style={{
                  ...styles,
                  iconContainer: {
                    top: 10,
                    right: 12,
                  },
                }}
                value={vat}
                useNativeAndroidPickerStyle={false}
                textInputProps={{ underlineColor: 'yellow' }}
                Icon={() => {
                  return <MaterialCommunityIcons name="arrow-up-down" size={24} color="black" />;
                }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <RNPickerSelect
                placeholder={{}}
                ref={pickerRef}
                items={[
                  {
                    label: 'שקל',
                    value: 'shekel',
                  },
                  {
                    label: 'דולר',
                    value: 'usd',
                  },
                ]}
                onValueChange={(value) => {
                  setCurrency(value);
                }}
                style={{
                  ...styles,
                  iconContainer: {
                    top: 10,
                    right: 12,
                  },
                }}
                value={currency}
                useNativeAndroidPickerStyle={false}
                textInputProps={{ underlineColor: 'yellow' }}
                Icon={() => {
                  return <MaterialCommunityIcons name="arrow-up-down" size={24} color="black" />;
                }}
              />
            </View>
          </View> */}
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>פריט</DataTable.Title>
              <DataTable.Title>כמות</DataTable.Title>
              <DataTable.Title>מחיר ליח'</DataTable.Title>
              <DataTable.Title numeric>סה"כ</DataTable.Title>
              {/* <DataTable.Title numeric></DataTable.Title> */}
            </DataTable.Header>
            {dataTableValues.map((obj, index) => {
              return (
                <DataTable.Row key={index}>
                  <DataTable.Cell>{obj?.itemName}</DataTable.Cell>
                  <DataTable.Cell>{obj?.intity}</DataTable.Cell>
                  <DataTable.Cell>
                    {'\u20AA'}
                    {obj?.price}
                  </DataTable.Cell>
                  <DataTable.Cell numeric>
                    {'\u20AA'}
                    {Number(obj?.price) * Number(obj?.intity)}
                  </DataTable.Cell>
                  {/* <DataTable.Cell numeric>{<Icon name="dots-vertical" size={20} />}</DataTable.Cell> */}
                </DataTable.Row>
              );
            })}

            <Button
              containerStyle={{ margin: 20 }}
              disabledStyle={{
                borderWidth: 2,
                borderColor: '#00F',
              }}
              disabledTitleStyle={{ color: '#00F' }}
              icon={<Icon name="plus" size={15} color="#2089dc" />}
              iconContainerStyle={{ background: '#000' }}
              // iconLeft
              raised
              loadingProps={{ animating: true }}
              loadingStyle={{}}
              onPress={() =>
                navigation.navigate('הוספת פריט', {
                  setDataTableValues: setDataTableValues,
                  dataTableValues: dataTableValues,
                  setIsSum: setIsSum,
                })
              }
              title="הוספת פריט"
              titleProps={{}}
              titleStyle={{ marginHorizontal: 5 }}
              type="outline"
            />
            <Divider style={{ elevation: 0.5 }} />
            <View style={{ flex: 1, padding: 5, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.name, { textAlign: 'left' }]}>סה"כ:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>
                  {'\u20AA'}
                  {sumPrice}
                </Text>
              </View>
            </View>
            <Text ellipsizeMode="clip" numberOfLines={1}>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - -
            </Text>
            <View style={{ flex: 1, padding: 5, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.name, { textAlign: 'left' }]}>מע"מ:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>
                  {'\u20AA'}
                  {(Number(sumPrice) * 0.17).toFixed(2)}
                </Text>
              </View>
            </View>
            <Divider style={{ elevation: 0.5 }} />
            <View
              style={{
                flex: 1,
                padding: 5,
                marginTop: 10,
                flexDirection: 'row',
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={[styles.name, { textAlign: 'left' }]}>סה"כ לתשלום:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>
                  {'\u20AA'}
                  {(Number(sumPrice) * 1.17).toFixed(2)}
                </Text>
              </View>
            </View>
          </DataTable>
          <CustomDivider />

          <Card.Title style={{ textAlign: 'left' }}>תקבולים</Card.Title>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>סוג א. תשלום</DataTable.Title>
              <DataTable.Title numeric>תאריך</DataTable.Title>
              <DataTable.Title numeric>סכום</DataTable.Title>
              <DataTable.Title numeric></DataTable.Title>
            </DataTable.Header>
            {/* <DataTable.Row>
              <DataTable.Cell>כ.אשראי</DataTable.Cell>
              <DataTable.Cell numeric>20/04/22</DataTable.Cell>
              <DataTable.Cell numeric>{'\u20AA'}345</DataTable.Cell>
              <DataTable.Cell numeric>{<Icon name="dots-vertical" size={20} />}</DataTable.Cell>
            </DataTable.Row> */}
            {paymentTableValues.map((obj, index) => {
              return (
                <DataTable.Row key={index}>
                  <DataTable.Cell>{obj?.title}</DataTable.Cell>
                  <DataTable.Cell>{obj?.date}</DataTable.Cell>
                  <DataTable.Cell>
                    {'\u20AA'}
                    {obj?.sumPrice}
                  </DataTable.Cell>
                </DataTable.Row>
              );
            })}
            <Button
              containerStyle={{ margin: 20 }}
              disabledStyle={{
                borderWidth: 2,
                borderColor: '#00F',
              }}
              disabledTitleStyle={{ color: '#00F' }}
              icon={<Icon name="plus" size={15} color="#2089dc" />}
              iconContainerStyle={{ background: '#000' }}
              // iconLeft
              raised
              loadingProps={{ animating: true }}
              loadingStyle={{}}
              onPress={() =>
                navigation.navigate('הוספת אמצעי תשלום', {
                  sumPrice: `${(Number(sumPrice) * 1.17).toFixed(2)}`,
                  sumPricePayment: `${sumPricePayment}`,
                  setIsSumPayment: setIsSumPayment,
                })
              }
              title="הוספת אמצעי תשלום"
              titleProps={{}}
              titleStyle={{ marginHorizontal: 5 }}
              type="outline"
            />
          </DataTable>
          <Divider style={{ elevation: 0.5 }} />
          <View style={{ flex: 1, padding: 5, marginTop: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ textAlign: 'left' }}>סה"כ שולם:</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>
                {'\u20AA'}
                {sumPricePayment}
              </Text>
            </View>
          </View>
        </Card>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('סיכום', {
              paymentTableValues: paymentTableValues,
              dataTableValues: dataTableValues,
              sumPricePayment: sumPricePayment,
              sumPriceWithVAT: (Number(sumPrice) * 1.17).toFixed(2),
              sumPriceVAT: (Number(sumPrice) * 0.17).toFixed(2),
              sumPrice: sumPrice,
              clientObj: clientObj,
              date: date,
            })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>הבא</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  dateInputField: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
  },
});

export default InvoiceFirst;
