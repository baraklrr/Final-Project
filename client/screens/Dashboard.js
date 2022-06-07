import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "@rneui/themed";
import TabContainer from "../components/TabContainer";
import { COLORS } from "../core/theme";
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
                backgroundColor: "#80ffdb",
                resizeMode: "cover",
              }}
            ></View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>יתרה מוערכת</Text>
              </View>
              <View style={{ flex: 1 }}>
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
            
            <View style={styles.container}>
            <Text>space </Text>
            </View>
            <View style={styles.user}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                  borderRadius: 6,
                  backgroundColor: "#a3cef1",
                  resizeMode: "cover",
                }}
              ></View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>סך הכנסות כללית</Text>
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
                  backgroundColor: "#6096ba",
                  resizeMode: "cover",
                }}
              ></View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>סך הוצאות כללית</Text>
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
                  backgroundColor: "#6096ba",
                  resizeMode: "cover",
                }}
              ></View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>מס הכנסה</Text>
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
                  backgroundColor: "#274c77",
                  resizeMode: "cover",
                }}
              ></View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>מע"מ </Text>
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
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: COLORS.bg,
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