import React, { useRef, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import TabContainer from '../components/TabContainer';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  Text: {
    textAlign: 'center',
  },
  list: {
    padding: 13,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
  },
});
//for android select box

export default function ReportScreen({ navigation }) {
  const [selectedoption1, setSelectedoption1] = useState();
  const [selectedoption2, setSelectedoption2] = useState();
  const [selectedoption3, setSelectedoption3] = useState();
  const [selectedoption4, setSelectedoption4] = useState();
  const [selectedoption5, setSelectedoption5] = useState();
  const [selectedoption6, setSelectedoption6] = useState();
  const [selectedoption, setSelectedoption7] = useState();

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  const options = ['פעיל', 'ממתין לסגירה', 'סגור'];

  return (
    <TabContainer>
      <ScrollView>
        <Card.Title
          style={styles.list}
          titleStyle={{ fontSize: 16 }}
          title="ינואר - פברואר"
          right={() => (
            <RNPickerSelect
              placeholder={{}}
              ref={pickerRef}
              Icon={() => {
                return <MaterialCommunityIcons name="menu-down" size={24} color="black" />;
              }}
              items={options.map((obj) => ({
                label: obj,
                value: obj,
                color: 'rgba(77,38,22,1)',
              }))}
              onValueChange={(value) => {
                setSelectedoption1(value);
              }}
              style={{
                ...styles,
                iconContainer: {
                  right: 90,
                },
              }}
              value={selectedoption1}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColor: 'yellow' }}
            />
          )}
        />

        <Card.Title
          style={styles.list}
          titleStyle={{ fontSize: 16 }}
          title="מרץ-אפריל"
          right={() => (
            <RNPickerSelect
              placeholder={{}}
              ref={pickerRef}
              Icon={() => {
                return <MaterialCommunityIcons name="menu-down" size={24} color="black" />;
              }}
              items={options.map((obj) => ({
                label: obj,
                value: obj,
                color: 'rgba(77,38,22,1)',
              }))}
              onValueChange={(value) => {
                setSelectedoption2(value);
              }}
              style={{
                ...styles,
                iconContainer: {
                  right: 90,
                },
              }}
              value={selectedoption2}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColor: 'yellow' }}
            />
          )}
        />

        <Card.Title
          style={styles.list}
          titleStyle={{ fontSize: 16 }}
          title="מאי - יוני"
          right={() => (
            <RNPickerSelect
              placeholder={{}}
              ref={pickerRef}
              Icon={() => {
                return <MaterialCommunityIcons name="menu-down" size={24} color="black" />;
              }}
              items={options.map((obj) => ({
                label: obj,
                value: obj,
                color: 'rgba(77,38,22,1)',
              }))}
              onValueChange={(value) => {
                setSelectedoption3(value);
              }}
              style={{
                ...styles,
                iconContainer: {
                  right: 90,
                },
              }}
              value={selectedoption3}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColor: 'yellow' }}
            />
          )}
        />

        <Card.Title
          style={styles.list}
          titleStyle={{ fontSize: 16 }}
          title="יולי-אוגוסט"
          right={() => (
            <RNPickerSelect
              placeholder={{}}
              ref={pickerRef}
              Icon={() => {
                return <MaterialCommunityIcons name="menu-down" size={24} color="black" />;
              }}
              items={options.map((obj) => ({
                label: obj,
                value: obj,
                color: 'rgba(77,38,22,1)',
              }))}
              onValueChange={(value) => {
                setSelectedoption4(value);
              }}
              style={{
                ...styles,
                iconContainer: {
                  right: 90,
                },
              }}
              value={selectedoption4}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColor: 'yellow' }}
            />
          )}
        />

        <Card.Title
          style={styles.list}
          titleStyle={{ fontSize: 16 }}
          title="ספטמבר-אוקטובר"
          right={() => (
            <RNPickerSelect
              placeholder={{}}
              ref={pickerRef}
              Icon={() => {
                return <MaterialCommunityIcons name="menu-down" size={24} color="black" />;
              }}
              items={options.map((obj) => ({
                label: obj,
                value: obj,
                color: 'rgba(77,38,22,1)',
              }))}
              onValueChange={(value) => {
                setSelectedoption5(value);
              }}
              style={{
                ...styles,
                iconContainer: {
                  right: 90,
                },
              }}
              value={selectedoption5}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColor: 'yellow' }}
            />
          )}
        />

        <Card.Title
          style={styles.list}
          titleStyle={{ fontSize: 16 }}
          title="נובמבר-דצמבר"
          right={() => (
            <RNPickerSelect
              placeholder={{}}
              ref={pickerRef}
              Icon={() => {
                return <MaterialCommunityIcons name="menu-down" size={24} color="black" />;
              }}
              items={options.map((obj) => ({
                label: obj,
                value: obj,
                color: 'rgba(77,38,22,1)',
              }))}
              onValueChange={(value) => {
                setSelectedoption6(value);
              }}
              style={{
                ...styles,
                iconContainer: {
                  right: 90,
                },
              }}
              value={selectedoption6}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColor: 'yellow' }}
            />
          )}
        />
      </ScrollView>
    </TabContainer>
  );
}
