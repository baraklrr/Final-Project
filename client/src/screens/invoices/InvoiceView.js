import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card, Divider } from "@rneui/themed";
import { Chip, DataTable, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "../../../components/Header";

const InvoiceView = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Card>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ height: 20, width: 20 }}>
              <Text style={{ alignSelf: "center" }}></Text>
            </View>
            <Chip
              style={{
                borderColor: `lightgreen`,
                backgroundColor: `lightgreen`,
                alignSelf: "center",
              }}
              icon="check"
            >
              מסמך סגור
            </Chip>
            <TouchableOpacity
              onPress={() => navigation.navigate("אפשרויות")}
              style={{
                alignSelf: "center",
              }}
            >
              <Icon name="dots-vertical" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Header
            style={{ textAlign: "center", marginTop: 15, color: "black" }}
          >
           24 יולי, 2022
          </Header>
          <Text style={{ opacity: 0.2 }} ellipsizeMode="clip" numberOfLines={1}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          </Text>
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
          <Header
            style={{
              textAlign: "center",
              fontSize: 50,
              paddingVertical: 0,
              marginTop: -15,
              color: "black",
            }}
          >
            ₪240
          </Header>
          <Text style={{ opacity: 0.2 }} ellipsizeMode="clip" numberOfLines={1}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          </Text>
          <View style={{ flex: 1, padding: 5, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={{ color: "grey" }}>סכום ההכנסה (כולל מע"מ)</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "black",
                  textAlign: "right",
                  fontWeight: "bold",
                }}
              >
                {"\u20AA"}345
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, padding: 5, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={{ color: "grey" }}>שם לקוח</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "black",
                  textAlign: "right",
                  fontWeight: "bold",
                }}
              >
                אלון אלוני
              </Text>
            </View>
          </View>
          <Text style={{ opacity: 0.2 }} ellipsizeMode="clip" numberOfLines={1}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          </Text>
        </Card>
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

          <Card.Divider
            style={{
              marginTop: 24,
              marginRight: -15,
              marginLeft: -15,
              elevation: 1,
            }}
          />

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
          <Card.Divider
            style={{
              marginTop: 24,
              marginRight: -15,
              marginLeft: -15,
              elevation: 1,
            }}
          />
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

export default InvoiceView;
