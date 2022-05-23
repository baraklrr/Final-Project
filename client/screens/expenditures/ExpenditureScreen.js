import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import { Card, Input } from '@rneui/themed';
import DateSelect from '../../components/DateSelect';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PhotoLibraryPicker from '../../components/PhotoLibraryPicker';
import NumberFormat from 'react-number-format';
import SwitchSelector from 'react-native-switch-selector';
import ExpenseDataService from '../../services/expense.service';

const options = [
  { label: '€', value: '0', testID: 'switch-zero', accessibilityLabel: 'switch-zero' },
  { label: '₪', value: '1', testID: 'switch-one', accessibilityLabel: 'switch-one' },
  { label: '$', value: '2', testID: 'switch-two', accessibilityLabel: 'switch-two' },
];

const ExpenditureScreen = ({ navigation }) => {
  const [value, setValue] = useState();
  const [currency, setCurrency] = useState(0);
  const [imageBase64, setImageBase64] = useState(null);
  const [image, setImage] = useState(null);

  const saveExpense = () => {
    var data = {
      businessId: 1,
      date: 1,
      name: 'asd',
      expenseItems: JSON.stringify({ name: 'Alon' }),
      expenseImg: 'asd',
      expenseSum: 1.2,
      currency: 'asd',
      VatType: 'asd',
      VatRefund: 1.2,
      IrsRefund: 1.2,
      refundSum: 1.2,
      confirmed: true,
    };
    console.log('api call');

    ExpenseDataService.create(data)
      .then((response) => {
        // this.setState({
        //   id: response.data.id,
        //   title: response.data.title,
        //   description: response.data.description,
        //   published: response.data.published,

        //   submitted: true,
        // });
        console.log('bruh');

        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleChange = (e) => {
    setValue(e);
  };
  return (
    <View>
      <Card>
        <DateSelect />
        <Card.Title
          style={{
            textAlign: 'center',
            color: 'grey',
            marginTop: 10,
            fontSize: 14,
          }}
        >
          סכום ההכנסה (לא כולל מע"מ)
        </Card.Title>

        <NumberFormat
          thousandsGroupStyle="thousand"
          value={value}
          renderText={(value) => (
            <Input
              editable={!image}
              style={{ textAlign: 'center', fontSize: 50, fontWeight: 'bold' }}
              maxLength={10}
              onChangeText={handleChange}
              autoCorrect={false}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              value={image == null ? value : options[currency].label + value}
              keyboardType="numeric"
            />
          )}
          decimalSeparator="."
          displayType="text"
          type="text"
          thousandSeparator={true}
        />
        {!image && (
            <Text style={{ opacity: 0.2 }} ellipsizeMode="clip" numberOfLines={1}>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - -
            </Text>
          ) && (
            <SwitchSelector
              initial={1}
              onPress={(value) => setCurrency(value)}
              textColor="#274c77"
              selectedColor="white"
              buttonColor="#274c77"
              borderColor="#274c77"
              fontWeight="bold"
              fontSize={20}
              options={options}
            />
          )}
        <View>
          {image && (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ opacity: 0.2 }} ellipsizeMode="clip" numberOfLines={1}>
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - - - - - - - - - -
              </Text>
              <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
            </View>
          )}
        </View>
      </Card>
      <View style={styles.bottomContainer}>
        <View style={{ flex: 1 }}>
          {!image && (
            <PhotoLibraryPicker
              avatarIcon="person"
              image={image}
              setImageBase64={setImageBase64}
              setImage={setImage}
            />
          )}
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ flex: 1 }}>
          {image && (
            <TouchableOpacity
              style={styles.panelButton}
              onPress={
                // () =>
                // navigation.reset({
                //   index: 0,
                //   routes: [
                //     {
                //       name: 'הוצאות בתהליך קליטה',
                //       params: { someParam: 'Param1' },
                //     },
                //   ],
                // })
                saveExpense
              }
            >
              <Text style={styles.panelButtonTitle}>הוספת הוצאה</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    marginTop: 'auto',
    flexDirection: 'row',
    padding: 5,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#6096ba',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ExpenditureScreen;
