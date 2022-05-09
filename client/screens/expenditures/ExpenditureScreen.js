import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import { Card, Input, Button } from "@rneui/themed";
import DateSelect from "../../components/DateSelect";
import { ToggleButton } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import PhotoLibraryPicker from "../../components/PhotoLibraryPicker";

const ExpenditureScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = React.useState();
  const [value, setValue] = React.useState("nis");
  const replaceNonNumeric = (numStr) => {
    return String(numStr).replace(/[^0-9]/g, "");
  };
  const commarize = (numStr) => {
    return Number(replaceNonNumeric(numStr)).toLocaleString();
  };
  const handleChange = (e) => {
    setInputValue(commarize(e));
  };
  const numberWithCommas = (x) => {
    return setInputValue();
 }
  return (
    <View>
      <Card>
        <DateSelect />
        <Card.Title
          style={{
            textAlign: "center",
            color: "grey",
            marginTop: 10,
            fontSize: 14,
          }}
        >
          סכום ההכנסה (לא כולל מע"מ)
        </Card.Title>
        <Input
          style={{ textAlign: "center", fontSize: 50, fontWeight: "bold" }}
          maxLength={10}
          autoCorrect={false}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          value={inputValue}
          onChangeText={handleChange}
          keyboardType="number-pad"
        />
        <Text style={{ opacity: 0.2 }} ellipsizeMode="clip" numberOfLines={1}>
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        </Text>
        <ToggleButton.Row
          style={{ justifyContent: "space-between" }}
          onValueChange={(value) => setValue(value)}
          value={value}
        >
          <ToggleButton
            icon={({ size, color }) => (
              <FontAwesome5 name="dollar-sign" color={color} size={size} />
            )}
            style={{ borderWidth: 0 }}
            value="usd"
          />
          <ToggleButton
            icon={({ size, color }) => (
              <FontAwesome5 name="shekel-sign" color={color} size={size} />
            )}
            style={{ borderWidth: 0 }}
            value="nis"
          />
          <ToggleButton
            icon={({ size, color }) => (
              <FontAwesome5 name="euro-sign" color={color} size={size} />
            )}
            style={{ borderWidth: 0 }}
            value="eur"
          />
        </ToggleButton.Row>
      </Card>
      <View style={styles.bottomContainer}>
        <View style={{ flex: 1 }}>
          <PhotoLibraryPicker/>
        
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    marginTop: "auto",
    flexDirection: "row",
    padding: 5,
  },
});

export default ExpenditureScreen;
