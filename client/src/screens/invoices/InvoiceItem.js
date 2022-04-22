import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { Input, Button } from "@rneui/themed";

const InvoiceItem = ({ navigation }) => {
  const [selectedVat, setSelectedVat] = useState();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          containerStyle={{
            width: 80,
            marginVertical: 10,
          }}
          onPress={() => navigation.navigate("חשבונית מס/קבלה", { id: 123 })}
          title="הוספה"
          type="clear"
          titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <RNPickerSelect
        placeholder={{}}
        items={[
          {
            label: 'מחיר לא כולל מע"מ',
            value: "vatNotInculeded",
          },
          {
            label: 'מחיר כולל מע"מ',
            value: "vatInculeded",
          },
        ]}
        onValueChange={(value) => {
          setSelectedVat(value);
        }}
        style={{
          ...styles,
          iconContainer: {
            top: 10,
            right: 12,
            margin: 20,
          },
        }}
        value={selectedVat}
        useNativeAndroidPickerStyle={false}
        textInputProps={{ underlineColor: "yellow" }}
        Icon={() => {
          return (
            <MaterialCommunityIcons
              name="arrow-up-down"
              size={24}
              color="black"
            />
          );
        }}
      />
      <View style={{ flex: 1, padding: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 3 }}>
            <Input
              textAlign="right"
              textAlignVertical="center"
              disabledInputStyle={{ background: "#ddd" }}
              // rightIcon={<Icon name="account-plus" size={20} />}
              placeholder="תיאור פריט"
            />
          </View>
          <View style={{ flex: 2 }}>
            <Input
              textAlign="right"
              textAlignVertical="center"
              disabledInputStyle={{ background: "#ddd" }}
              // rightIcon={<Icon name="account-plus" size={20} />}
              placeholder="כמות"
            />
          </View>
        </View>
        <View>
          <Input
            textAlign="right"
            textAlignVertical="center"
            disabledInputStyle={{ background: "#ddd" }}
            // rightIcon={<Icon name="account-plus" size={20} />}
            placeholder="סכום (לפריט בודד)"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "black",
    margin: 20,
    borderRadius: 3,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default InvoiceItem;
