import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CategoriesList(props) {
  return (
    <View style={styles.listTile}>
      <Text style={styles.title}>{props.category.name}</Text>
      <Icon
        name="edit"
        style={styles.trailing}
        size={20}
        color="#666666"
        onPress={() => props.editCategory(props.category.key)}
      />
      
      <Icon
        name="delete"
        style={styles.trailing}
        size={20}
        color="#666666"
        onPress={() => props.deleteCategory(props.category.key)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  listTile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#666666',
  },
  leading: {
    width: '20%',
  },
  title: {
    width: '60%',
    fontSize: 18,
  },
  trailing: {
    width: '20%',
  },
});
