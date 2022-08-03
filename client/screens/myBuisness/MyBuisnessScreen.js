import React, { useEffect, useState } from 'react';

import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import TabContainer from '../../components/TabContainer';
import { Card, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';
import { COLORS } from '../../core/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding: 8,
  },
  Text: {
    textAlign: 'center',
  },
  list: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
  },
  screenContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: COLORS.bg,
    padding: 8,
  },
});

export default function MyBuisnessScreen({ navigation }) {
  const [isAdmin, setIsAdmin] = useState(false);
  
  const getRoles = async () => {
    const storageRoles = await AsyncStorage.getItem('roles');
    setIsAdmin(storageRoles === 'ROLE_ADMIN' ? true : false);
  };
  useEffect(() => {
    getRoles();
  }, [navigation]);

  return (
    <TabContainer>
      <View style={styles.screenContainer}>
        <ScrollView>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('הדיווחים שלי');
              }}
            >
              <Card.Title
                style={styles.list}
                titleStyle={{ fontSize: 16 }}
                title="הדיווחים שלי"
                left={() => <Icon name="md-today-outline" color="#212121" size={27} />}
                right={() => <Icon name="chevron-back-outline" color="#212121" size={27} />}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('פרטי העסק שלי');
              }}
            >
              <Card.Title
                style={styles.list}
                titleStyle={{ fontSize: 16 }}
                title="פרטי העסק שלי"
                left={() => <Icon name="md-pencil" color="#212121" size={27} />}
                right={() => <Icon name="chevron-back-outline" color="#212121" size={27} />}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('נהלים');
              }}
            >
              <Card.Title
                style={styles.list}
                titleStyle={{ fontSize: 16 }}
                title="נהלים"
                left={() => <Icon name="book" color="#212121" size={27} />}
                right={() => <Icon name="chevron-back-outline" color="#212121" size={27} />}
              />
            </TouchableOpacity>
            {!isAdmin && (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('קטגוריות');
                }}
              >
                <Card.Title
                  style={styles.list}
                  titleStyle={{ fontSize: 16 }}
                  title="קטגוריות"
                  left={() => <Icon name="construct-outline" color="#212121" size={27} />}
                  right={() => <Icon name="chevron-back-outline" color="#212121" size={27} />}
                />
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </View>
    </TabContainer>
  );
}
