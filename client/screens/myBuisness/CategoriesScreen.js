import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import CategoriesList from '../../components/CategoriesList';
import ExpenseDataService from '../../services/expense.service';

export default function CategoriesScreen(props) {
  // Initalize empty array to store categories
  const [categories, setCategories] = useState([]);

  const [title, setTitle] = useState('');
  const [vat, setVat] = useState('');
  const [irs, setIrs] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    ExpenseDataService.getCategories()
      .then((response) => {
        console.log('loading categories');
        setCategories(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  };

  // function to add category object in categories list
  const addCategory = () => {
    if (title.length > 0) {
      // Add category to the list
      let data = {
        name: title,
        vatPercentage: vat,
        IrsPercentage: irs,
      };
      ExpenseDataService.addCategory(data)
        .then((response) => {
          setCategories([
            ...categories,
            { expensetypeId: response.data.expensetypeId, name: title },
          ]);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data); // => the response payload
          }
        });
      // clear the value of the textfield
      setTitle('');
      setIrs('');
      setVat('');
    }
  };

  // function to delete category from the categories list
  const deleteCategory = (id) => {
    // loop through categories list and return categories that don't match the id
    // update the state using setCategories function
    console.log(id);
    setCategories(
      categories.filter((category) => {
        console.log(category.expensetypeId);
        return category.expensetypeId !== id;
      })
    );
    ExpenseDataService.deleteCategory(id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  };

  useEffect(() => {
    // console.log(categories.length, 'Categories List length');
  }, [categories]);

  return (
    <View style={styles.container}>
      <View style={styles.category}>
        <TextInput
          placeholder="הוספת קטגוריה חדשה"
          value={title}
          onChangeText={(value) => setTitle(value)}
          style={styles.textbox}
        />
        <TextInput
          placeholder="vat"
          value={vat}
          onChangeText={(value) => setVat(value)}
          keyboardType="number-pad"
          style={styles.vatTextbox}
        />
        <TextInput
          placeholder="irs"
          value={irs}
          onChangeText={(value) => setIrs(value)}
          keyboardType="number-pad"
          style={styles.vatTextbox}
        />
        <Button style={{ flex: 1 }} title="הוסף" color="#405792" onPress={() => addCategory()} />
      </View>

      <ScrollView>
        {categories.map((category) => (
          <CategoriesList
            key={category.expensetypeId}
            category={category}
            deleteCategory={() => deleteCategory(category.expensetypeId)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 60,
  },
  category: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbox: {
    borderWidth: 1,
    borderColor: '#405792',
    borderRadius: 8,
    padding: 10,
    flex: 3,
    margin: 10,
    width: '80%',
  },
  vatTextbox: {
    borderWidth: 1,
    borderColor: '#405792',
    borderRadius: 8,
    padding: 10,
    flex: 1,
    margin: 2,
    width: '80%',
  },
});
