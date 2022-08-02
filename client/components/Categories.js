import React, { memo, useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import ExpenseDataService from '../services/expense.service';

export const Categories = memo((props) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    ExpenseDataService.getCategories()
      .then((response) => {
        response.data.map((category) => {
          data.push({ id: category.expensetypeId, title: category.name });
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  };

  const categorySelectHandler = (selected) => {
    setSelectedItem(selected);
    props.onCategorySelect(selected);
  };
  return (
    <View style={[{ marginTop: 20 }, Platform.select({ ios: { zIndex: 9 } })]}>
      <AutocompleteDropdown
        clearOnFocus={false}
        inputContainerStyle={{
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#383b42',
          shadowColor: '#00000099',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.3,
          shadowRadius: 8.46,
        }}
        textInputProps={{
          placeholder: 'בחר קטגוריה',
          textAlign: 'center',
          style: {
            color: '#383b42',
          },
        }}
        closeOnBlur={false}
        onSelectItem={categorySelectHandler}
        dataSet={data}
      />
      {/* <Text style={{ color: '#668', fontSize: 13 }}>
        Selected item: {JSON.stringify(selectedItem)}
      </Text> */}
    </View>
  );
});
