import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function Category(props) {
  const [category, setCategory] = useState('');

  return (
    <View style={styles.category}>
      <TextInput
        placeholder="Add a Category"
        value={category}
        onChangeText={(value) => setCategory(value)}
        style={styles.textbox}
      />
      <Button title="Add" color="#7F39FB" onPress={props.addCategory} />
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbox: {
    borderWidth: 1,
    borderColor: '#7F39FB',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: '80%',
  },
});
