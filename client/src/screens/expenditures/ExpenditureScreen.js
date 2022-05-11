import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { Card, Input, Button } from "@rneui/themed";
import DateSelect from "../../components/DateSelect";
import { ToggleButton } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import PhotoLibraryPicker from "../../components/PhotoLibraryPicker";
import NumberFormat from "react-number-format";

const ExpenditureScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = React.useState();
  const [value, setValue] = React.useState("nis");
  const [currency, setCurrency] = React.useState(0);
  const [imageBase64, setImageBase64] = useState(null);
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setValue(e);
  };
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

        <NumberFormat
          thousandsGroupStyle="thousand"
          value={value}
          renderText={(value) => (
            <Input
              style={{ textAlign: "center", fontSize: 50, fontWeight: "bold" }}
              maxLength={10}
              onChangeText={handleChange}
              autoCorrect={false}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              value={value}
              keyboardType="numeric"
            />
          )}
          decimalSeparator="."
          displayType="text"
          type="text"
          thousandSeparator={true}
        />
        <Text style={{ opacity: 0.2 }} ellipsizeMode="clip" numberOfLines={1}>
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        </Text>
        <ToggleButton.Row
          style={{ justifyContent: "space-between" }}
          onValueChange={(value) => setCurrency(value)}
          value={currency}
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
        <View>
          {image && (
            <View
              style={{
                marginTop: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ opacity: 0.2 }}
                ellipsizeMode="clip"
                numberOfLines={1}
              >
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - -
              </Text>
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            </View>
          )}
        </View>
      </Card>
      <View style={styles.bottomContainer}>
        <View style={{ flex: 1 }}>
          {!image && (
            <PhotoLibraryPicker
              avatarIcon="person"
              image={image}
              setImageBase64={setImageBase64}
              setImage={setImage}
            />
          )}
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ flex: 1 }}>
          {image && (
            <TouchableOpacity
              style={styles.panelButton}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'הוצאות בתהליך קליטה',
                      params: { someParam: "Param1" },
                    },
                  ],
                })
              }
            >
              <Text style={styles.panelButtonTitle}>הוספת הוצאה</Text>
            </TouchableOpacity>
          )}
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
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#90EE90",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});

export default ExpenditureScreen;
