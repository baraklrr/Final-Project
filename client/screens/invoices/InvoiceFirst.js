import React, { useState, useRef } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Card, Input, Button, Divider } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Checkbox, DataTable } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import InvoiceTextInput from "../../components/InvoiceTextInput";
import CustomDivider from "../../components/CustomDivider";
import DateSelect from "../../components/DateSelect";

const InvoiceFirst = ({ navigation }) => {

  const [checked, setChecked] = React.useState(false);
  const [vat, setVat] = useState();
  const [currency, setCurrency] = useState();
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  return (
    <ScrollView>
      <View>
        <Card>
          <Input
            textAlign="center"
            textAlignVertical="center"
            maxLength={24}
            disabledInputStyle={{ background: "#ddd" }}
            placeholder="תיאור ההכנסה"
          ></Input>
          <DateSelect/>
          <CustomDivider />
          <Card.Title style={{ textAlign: "left" }}>לכבוד</Card.Title>
          <TouchableOpacity>
            <Input
              textAlign="right"
              textAlignVertical="center"
              disabledInputStyle={{ background: "#ddd" }}
              rightIcon={<Icon name="account-plus" size={20} />}
              icon
              placeholder="שם"
            />
          </TouchableOpacity>
          <Input
            textAlign="right"
            textAlignVertical="center"
            disabledInputStyle={{ background: "#ddd" }}
            rightIcon={<Icon name="phone" size={20} />}
            placeholder="טלפון"
            keyboardType="number-pad"
          />
          <Input
            textAlign="right"
            textAlignVertical="center"
            disabledInputStyle={{ background: "#ddd" }}
            placeholder="מספר עוסק או ח.פ"
            keyboardType="number-pad"
          />
          <Input
            textAlign="right"
            textAlignVertical="center"
            disabledInputStyle={{ background: "#ddd" }}
            placeholder="כתובת עסק"
          />
          <Input
            textAlign="right"
            textAlignVertical="center"
            disabledInputStyle={{ background: "#ddd" }}
            placeholder="אימייל"
            keyboardType="email-address"
          />
          <Checkbox.Item
            label="שמור לקוח לפעם הבאה"
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <CustomDivider />

          <Card.Title style={{ textAlign: "left" }}>
            פירוט עסקה ושירותים
          </Card.Title>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <RNPickerSelect
                placeholder={{}}
                ref={pickerRef}
                items={[
                  {
                    label: "רגיל (17%)",
                    value: "vatInculeded",
                  },
                  {
                    label: "סתם",
                    value: "vatNotInculeded",
                  },
                ]}
                onValueChange={(value) => {
                  setVat(value);
                }}
                style={{
                  ...styles,
                  iconContainer: {
                    top: 10,
                    right: 12,
                  },
                }}
                value={vat}
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
            </View>
            <View style={{ flex: 1 }}>
              <RNPickerSelect
                placeholder={{}}
                ref={pickerRef}
                items={[
                  {
                    label: "שקל",
                    value: "shekel",
                  },
                  {
                    label: "דולר",
                    value: "usd",
                  },
                ]}
                onValueChange={(value) => {
                  setCurrency(value);
                }}
                style={{
                  ...styles,
                  iconContainer: {
                    top: 10,
                    right: 12,
                  },
                }}
                value={currency}
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
            </View>
          </View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>פריט</DataTable.Title>
              <DataTable.Title numeric>כמות</DataTable.Title>
              <DataTable.Title numeric>מחיר ליח'</DataTable.Title>
              <DataTable.Title numeric>סה"כ</DataTable.Title>
              <DataTable.Title numeric></DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>פריט 1</DataTable.Cell>
              <DataTable.Cell numeric>1</DataTable.Cell>
              <DataTable.Cell numeric>{"\u20AA"}345</DataTable.Cell>
              <DataTable.Cell numeric>{"\u20AA"}345</DataTable.Cell>
              <DataTable.Cell numeric>
                {<Icon name="dots-vertical" size={20} />}
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>פריט 2</DataTable.Cell>
              <DataTable.Cell numeric>2</DataTable.Cell>
              <DataTable.Cell numeric>{"\u20AA"}150</DataTable.Cell>
              <DataTable.Cell numeric>{"\u20AA"}300</DataTable.Cell>
              <DataTable.Cell numeric>
                {<Icon name="dots-vertical" size={20} />}
              </DataTable.Cell>
            </DataTable.Row>
            <Button
              containerStyle={{ margin: 20 }}
              disabledStyle={{
                borderWidth: 2,
                borderColor: "#00F",
              }}
              disabledTitleStyle={{ color: "#00F" }}
              icon={<Icon name="plus" size={15} color="#2089dc" />}
              iconContainerStyle={{ background: "#000" }}
              iconLeft
              raised
              loadingProps={{ animating: true }}
              loadingStyle={{}}
              onPress={() => navigation.navigate("הוספת פריט")}
              title="הוספת פריט"
              titleProps={{}}
              titleStyle={{ marginHorizontal: 5 }}
              type="outline"
            />
            <Divider style={{ elevation: 0.5 }} />
            <View style={{ flex: 1, padding: 5, flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>סה"כ:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ textAlign: "right", fontWeight: "bold" }}>
                  {"\u20AA"}345
                </Text>
              </View>
            </View>
            <Text ellipsizeMode="clip" numberOfLines={1}>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            </Text>
            <View style={{ flex: 1, padding: 5, flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>מע"מ:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ textAlign: "right", fontWeight: "bold" }}>
                  {"\u20AA"}200
                </Text>
              </View>
            </View>
            <Divider style={{ elevation: 0.5 }} />
            <View
              style={{
                flex: 1,
                padding: 5,
                marginTop: 10,
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>סה"כ לתשלום:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ textAlign: "right", fontWeight: "bold" }}>
                  {"\u20AA"}1550
                </Text>
              </View>
            </View>
          </DataTable>
          <CustomDivider/>

          <Card.Title style={{ textAlign: "left" }}>תקבולים</Card.Title>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>סוג אמצעי תשלום</DataTable.Title>
              <DataTable.Title numeric>תאריך</DataTable.Title>
              <DataTable.Title numeric>סכום</DataTable.Title>
              <DataTable.Title numeric></DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>כ.אשראי</DataTable.Cell>
              <DataTable.Cell numeric>20/04/22</DataTable.Cell>
              <DataTable.Cell numeric>{"\u20AA"}345</DataTable.Cell>
              <DataTable.Cell numeric>
                {<Icon name="dots-vertical" size={20} />}
              </DataTable.Cell>
            </DataTable.Row>
            <Button
              containerStyle={{ margin: 20 }}
              disabledStyle={{
                borderWidth: 2,
                borderColor: "#00F",
              }}
              disabledTitleStyle={{ color: "#00F" }}
              icon={<Icon name="plus" size={15} color="#2089dc" />}
              iconContainerStyle={{ background: "#000" }}
              iconLeft
              raised
              loadingProps={{ animating: true }}
              loadingStyle={{}}
              onPress={() => navigation.navigate("הוספת אמצעי תשלום")}
              title="הוספת אמצעי תשלום"
              titleProps={{}}
              titleStyle={{ marginHorizontal: 5 }}
              type="outline"
            />
          </DataTable>
          <Divider style={{ elevation: 0.5 }} />
          <View
            style={{ flex: 1, padding: 5, marginTop: 10, flexDirection: "row" }}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>סה"כ שולם:</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ textAlign: "right", fontWeight: "bold" }}>
                {"\u20AA"}345
              </Text>
            </View>
          </View>
        </Card>
        <TouchableOpacity onPress={() => navigation.navigate("סיכום")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>הבא</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  dateInputField: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
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
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  button: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
  },
});

export default InvoiceFirst;
