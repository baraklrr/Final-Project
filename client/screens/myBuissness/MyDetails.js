import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { theme } from "../../core/theme";

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
      <Text
        //direction="rtl"
        label={constants.fullNameLable}
        value={""}
      />
    </View>
  );
}

const style = StyleSheet.create({
  
  textInput: {
    textAlign: "left",
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

