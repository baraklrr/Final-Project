import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { theme } from "../core/theme";

const constants = {
  fullNameLable: "שם",
  addressLable: "כתובת",
  dateOfBirthLable: "תאריך לידה",
  familyStatusLable: "מצב משפחתי",
  genderLable: "מין",
  kidsLable: "ילדים",
  phoneLable: "טלפון",
};

export default function MyDetails() {
  return (
    <View style={style.pageContainer}>
      <TextInput
        //direction="rtl"
        style={style.textInput}
        label={constants.fullNameLable}
        value={""}
        onChangeText={(text) => console.log(text)}
      />
      <TextInput
        style={style.textInput}
        label={constants.addressLable}
        value={""}
        onChangeText={(text) => console.log(text)}
      />
      <TextInput
        textAlign={"right"}
        style={style.textInput}
        label={constants.dateOfBirthLable}
        value={""}
        onChangeText={(text) => console.log(text)}
      />
      <TextInput
        style={style.textInput}
        label={constants.familyStatusLable}
        value={""}
        onChangeText={(text) => console.log(text)}
      />

      <TextInput
        style={kidsTextInput}
        label={constants.kidsLable}
        value={""}
        onChangeText={(text) => console.log(text)}
      />
      <TextInput
        style={phoneTextInput}
        label={constants.phoneLable}
        value={""}
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
}

const style = StyleSheet.create({
  pageContainer: {
    marginTop: "42px",
  },
  textInput: {
    marginVertical: "8px",
    marginHorizontal: "8px",
    textAlign: "start",
  },
  phoneTextInput: {
    width: "250px",
  },
  kidsTextInput: {
    width: "80px",
  },

  text: {
    marginTop: 80,
    fontSize: 50,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const phoneTextInput = StyleSheet.compose(
  style.phoneTextInput,
  style.textInput
);

const kidsTextInput = StyleSheet.compose(style.kidsTextInput, style.textInput);
// const text = StyleSheet.compose(page.text, lists.listItem);
