import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card, Input, Divider } from "@rneui/themed";
import { Button } from "@rneui/base";
import { DataTable } from "react-native-paper";
import CustomDivider from "../../components/CustomDivider";

const InvoiceSecond = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Card>
          <Card.Title style={{ textAlign: "left", fontSize: 20 }}>
            פרטי המסמך
          </Card.Title>
          <Card.Title
            style={{ textAlign: "left", color: "grey", fontSize: 15 }}
          >
            סוג מסמך:
          </Card.Title>
          <Card.Title
            style={{ textAlign: "left", color: "darkblue", fontSize: 24 }}
          >
            חשבונית מס / קבלה
          </Card.Title>

          <CustomDivider/>

          <Card.Title style={{ textAlign: "left" }}>
            פירוט עסקה ושירותים
          </Card.Title>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>פריט</DataTable.Title>
              <DataTable.Title numeric>כמות</DataTable.Title>
              <DataTable.Title numeric>מחיר ליח'</DataTable.Title>
              <DataTable.Title numeric>סה"כ</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>פריט 1</DataTable.Cell>
              <DataTable.Cell numeric>1</DataTable.Cell>
              <DataTable.Cell numeric>{"\u20AA"}345</DataTable.Cell>
              <DataTable.Cell numeric>{"\u20AA"}345</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>פריט 2</DataTable.Cell>
              <DataTable.Cell numeric>2</DataTable.Cell>
              <DataTable.Cell numeric>{"\u20AA"}150</DataTable.Cell>
              <DataTable.Cell numeric>{"\u20AA"}300</DataTable.Cell>
            </DataTable.Row>
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
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>כ.אשראי</DataTable.Cell>
              <DataTable.Cell numeric>20/04/22</DataTable.Cell>
              <DataTable.Cell numeric>{"\u20AA"}345</DataTable.Cell>
            </DataTable.Row>
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
        <Button
          title={"הפקת חשבונית מס / קבלה"}
          onPress={() => 
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'חשבונית מס/קבלה 240796',
                  params: { someParam: 'Param1' },
                },
              ],
            })}
          containerStyle={{
            padding: 15,
            marginVertical: 10,
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default InvoiceSecond;
