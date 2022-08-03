import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Alert
} from 'react-native';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { COLORS } from '../../core/theme';
import { nameValidator } from '../../helpers/nameValidator';
import ExpenseDataService from '../../services/expense.service';
import name from '../Template';

export default function UpdateCategory({route, navigation }) {
    const [title, setTitle] = useState('');
    const [vat, setVat] = useState('');
    const [irs, setIrs] = useState('');

    useEffect(() => {
        loadData();
      }, []);

    const loadData = () => {
    ExpenseDataService.getexpenseTypeById(route.params.id).then((resopse)=>{
        setVat(resopse.data.vatPercentage);
        setIrs(resopse.data.IrsPercentage)
        setTitle(resopse.data.name);
        console.log(resopse.data);
    }).catch ((error)=>{
    console.log(error.response.data); // => the response payload
   });
   }


  const updateOnclick = async () => {
    let data = 
    {
        name: title,
        vatPercentage: vat,
        IrsPercentage: irs,
    };

    ExpenseDataService.updateCategory(route.params.id,data).then (()=>{
        console.log("category updated");
    }).catch((error)=>{

        console.log(error);
    });
    navigation.goBack();
  };
console.log("vat "+vat);
console.log("title "+title)
console.log("irs "+irs);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        showsVerticalScrollIndicator={false} >
            
        <TextInput
          label="שם"
          value={title}
          returnKeyType="next"
          onChangeText={(text) => setTitle(text)}
        />

        <TextInput
          label="אחוז מס הכנסה"
          value= {""+vat}
          keyboardType='numeric'
          returnKeyType="next"
          onChangeText={(text) => setVat(text)}
        />

        <TextInput
          label="אחוז מעמ"
          value= {""+irs}
             keyboardType='numeric'
          returnKeyType="next"
          onChangeText={(text) => setIrs(text)}
        />


        <View style={{ flexDirection: 'row', margin: 10 }}>
          <Button
            mode="contained"
            style={{ marginHorizontal: 10, width: '50%' }}
            onPress={() => updateOnclick()}
         >
         {' '}
         עדכן{' '}
          </Button>

          <Button
            mode="contained"
            style={{ marginHorizontal: 10, width: '50%' }}
            onPress={() => navigation.goBack()}
          >
            {' '}
            בטל{' '}
          </Button> 

        </View>
       
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    padding: 20,
  },
  userImg: {
    height: 60,
    width: 60,
  },
});
