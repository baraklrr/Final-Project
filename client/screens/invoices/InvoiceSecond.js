import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Input, Divider } from '@rneui/themed';
import { Button } from '@rneui/base';
import { DataTable } from 'react-native-paper';
import CustomDivider from '../../components/CustomDivider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

const InvoiceSecond = ({ navigation, route }) => {
  const {
    dataTableValues,
    sumPrice,
    sumPriceVAT,
    sumPriceWithVAT,
    paymentTableValues,
    sumPricePayment,
    clientObj,
    date,
  } = route?.params;

  const html = `  
    <html>
        <head>
         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        </head>
        <body style="text-align: right; margin: 5%; ">
          <div style="border: 1px solid; padding: 2%; ">
            <p style="font-size: 30px; font-family: Helvetica Neue; font-weight: normal;">
              פרטי לקוח
              <div style="font-weight: bold; margin-bottom: 1.5%; ">${clientObj?.name} :שם</div>
              <div style="font-weight: bold; margin-bottom: 1.5%;">${clientObj?.phone} :טלפון</div>
              <div style="font-weight: bold; margin-bottom: 1.5%;">:מספר עוסק או חפ</div>
              <div style="font-weight: bold; margin-bottom: 1.5%;">:שם</div>
              <div style="font-weight: bold; margin-bottom: 1.5%;">:שם</div>
            </p>
            <p style="font-size: 30px; font-family: Helvetica Neue; font-weight: normal;">
              פרטי המסמך
            <div style="font-weight: bold; margin-bottom: 1.5%; ">:סוג מסמך</div>
            </p>
            <p style="font-size: 30px; font-family: Helvetica Neue; font-weight: normal;">
              חשבונית מס קבלה
          <div style="font-weight: bold; margin-bottom: 1.5%; ">:סוג מסמך</div>
        </p>
    </div>
  </body>
</html>`;

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html,
    });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  };

  return (
    <ScrollView>
      <View>
        <Card>
          <View style={{ marginBottom: '5%' }}>
            <Card.Title style={{ textAlign: 'left', fontSize: 20 }}>פרטי הלקוח</Card.Title>
            <Text style={{ textAlign: 'left', fontSize: 15 }}>
              <Text style={{ fontWeight: 'bold' }}>שם:</Text> {clientObj?.name}
            </Text>
            <Text style={{ textAlign: 'left', fontSize: 15, marginVertical: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>טלפון:</Text> {clientObj?.phone}
            </Text>
            <Text style={{ textAlign: 'left', fontSize: 15 }}>
              <Text style={{ fontWeight: 'bold' }}>מספר עוסק או ח.פ:</Text>{' '}
              {clientObj?.companyNumber}
            </Text>
          </View>
          <Card.Title style={{ textAlign: 'left', fontSize: 20 }}>פרטי המסמך</Card.Title>
          <Card.Title style={{ textAlign: 'left', color: 'grey', fontSize: 15 }}>
            סוג מסמך:
          </Card.Title>
          <Card.Title style={{ textAlign: 'left', color: 'darkblue', fontSize: 24 }}>
            חשבונית מס / קבלה
          </Card.Title>

          <CustomDivider />

          <Card.Title style={{ textAlign: 'left' }}>פירוט עסקה ושירותים</Card.Title>
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
            <Divider style={{ elevation: 0.5 }} />
            <View style={{ flex: 1, padding: 5, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'left' }}>סה"כ:</Text>
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
                <Text style={{ textAlign: 'left' }}>מע"מ:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>
                  {'\u20AA'}
                  {sumPriceVAT}
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
                <Text style={{ textAlign: 'left' }}>סה"כ לתשלום:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>
                  {'\u20AA'}
                  {sumPriceWithVAT}
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
        <Button
          title={'הפקת חשבונית מס / קבלה'}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'הפקת חשבונית מס/קבלה',
                  params: { sumPrice: sumPrice, sumPriceWithVAT: sumPriceWithVAT, date: date },
                },
              ],
            })
          }
          containerStyle={{
            padding: 15,
            marginVertical: 10,
          }}
        />
        <Button
          title={'קבלה'}
          onPress={printToFile}
          containerStyle={{
            padding: 15,
            marginVertical: 10,
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InvoiceSecond;
