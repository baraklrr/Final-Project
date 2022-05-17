import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "@rneui/themed";
import TabContainer from "../components/TabContainer";
import { COLORS } from "../core/theme";

export default function Dashboard({ navigation }) {
  return (
    <TabContainer>
      <View style={styles.screenContainer}>
        <Card>
          <View style={styles.user}>
            <View
              style={{
                width: 20,
                height: 20,
                marginRight: 10,
                borderRadius: 6,
                backgroundColor: "yellow",
                resizeMode: "cover",
              }}
            ></View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>יתרה מוערכת</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ textAlign: "right", color: "grey" }}>
                  מרץ - אפריל
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              textAlign: "left",
              fontSize: 24,
              marginLeft: 18,
              fontWeight: "bold",
            }}
          >
            {"\u20AA"}14,357
          </Text>
        </Card>
        <View style={styles.space}>
          <Card>
            <Text style={styles.borderText}>{"\u20AA"}14,258 - הכנסות</Text>
            <View style={styles.container}>
              <View style={styles.box1}></View>
              <View style={styles.box2}></View>
              <View style={styles.box3}></View>
              <View style={styles.box4}></View>
            </View>
            <View style={styles.user}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                  borderRadius: 6,
                  backgroundColor: "#2196F3",
                  resizeMode: "cover",
                }}
              ></View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>מע"מ</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ textAlign: "right", fontWeight: "bold" }}>
                    {"\u20AA"}500
                  </Text>
                </View>
              </View>
            </View>
            <Card.Divider width={1}></Card.Divider>
            <View style={styles.user}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                  borderRadius: 6,
                  backgroundColor: "#8BC34A",
                  resizeMode: "cover",
                }}
              ></View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>ביטוח לאומי</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ textAlign: "right", fontWeight: "bold" }}>
                    {"\u20AA"}500
                  </Text>
                </View>
              </View>
            </View>
            <Card.Divider width={1}></Card.Divider>
            <View style={styles.user}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                  borderRadius: 6,
                  backgroundColor: "#e3aa1a",
                  resizeMode: "cover",
                }}
              ></View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>מקדמות מס הכנסה</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ textAlign: "right", fontWeight: "bold" }}>
                    {"\u20AA"}1550
                  </Text>
                </View>
              </View>
            </View>
          </Card>
        </View>
      </View>
    </TabContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // justifyContent: "center",
    height: 25,
    borderRadius: 4,
    marginTop: 14,
    overflow: "hidden",
    justifyContent: "space-around",
    alignItems: "stretch",
    marginBottom: 38,
  },
  screenContainer: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  box1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  box2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8BC34A",
  },
  box3: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e3aa1a",
  },
  space: {
    marginTop: 14,
  },
  box4: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  price: {
    textAlign: "right",
  },
  name: {
    fontSize: 16,
    paddingRight: 6,
  },
  borderText: {
    marginTop: -27,
    marginLeft: 10,
    fontSize: 14,
    textAlign: "left",
    color: "grey",
  },
});