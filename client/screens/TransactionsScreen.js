import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Card, ListItem } from "@rneui/themed";
import { Caption, Card as PaperCard } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Agenda } from "react-native-calendars";
import * as RootNavigation from "../navigation/RootNavigation";

const TransactionsScreen = () => {
  const [selectedIndex, setselectedIndex] = useState(-1);
  const handleIndexChange = (index) => {
    setselectedIndex(index);
  };
  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  };
  const [items, setItems] = useState({});
  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 10; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            let RandomNumber = Math.floor(Math.random() * 10000) + 1;
            let expOrIncome = Math.floor(Math.random() * 2);;
            items[strTime].push({
              // name: "Item for " + strTime + " #" + j,
              name: expOrIncome === 0 ? "הכנסה":"הוצאה",
              sum: "₪" + RandomNumber,
              state: expOrIncome,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };
  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={{ marginRight: 10, marginTop: 35 }}
        onPress={() =>
          RootNavigation.navigate("ExpenditureStack", {
            screen: "הוצאה טרם אושרה",
          })
        }
      >
        <PaperCard>
          <PaperCard.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                minHeight: 30,
              }}
            >
              {item.state === 0 && <Icon name="menu-down" size={24} color="green"  />}
              {item.state === 1 && <Icon name="menu-up" size={24} color="red" />}
              <Text style={{ fontSize: 15 }}>{item.name}</Text>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                {item.sum}
              </Text>
              <ListItem.Chevron
                size={20}
                style={{ transform: [{ rotateY: "180deg" }] }}
                color={"black"}
              />
            </View>
          </PaperCard.Content>
        </PaperCard>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Text style={styles.dates}>ינואר - פברואר</Text>
      <Text style={styles.title}>יתרה דו-חודשית לעסק</Text>
      <Text style={styles.sum}>₪14,357</Text>
      <Card>
        <View style={styles.parent}>
          <TouchableWithoutFeedback onPress={() => handleIndexChange(0)}>
            <View
              style={{
                opacity:
                  selectedIndex === -1 ? 1 : selectedIndex === 0 ? 1 : 0.4,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="menu-down" size={24} color="green" />
                <Caption>הכנסות</Caption>
              </View>
              <Text style={styles.sumin}>₪14,825</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleIndexChange(1)}>
            <View
              style={{
                opacity:
                  selectedIndex === -1 ? 1 : selectedIndex === 1 ? 1 : 0.4,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="menu-up" size={24} color="red" />
                <Caption>הוצאות</Caption>
              </View>
              <Text style={styles.sumin}>₪-468</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        {(selectedIndex === 0 || selectedIndex === 1) && (
          <View style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
          </View>
        )}
        <View style={styles.bottomparent}>
          <View style={styles.centeritems}>
            <View>
              {selectedIndex === 0 && (
                <Caption style={{ fontSize: 10 }}>● יתרה (נטו)</Caption>
              )}
              {selectedIndex === 1 && (
                <Caption style={{ fontSize: 10 }}>● הוצאה מוכרת</Caption>
              )}
            </View>
            {selectedIndex === 0 && (
              <Text style={{ fontSize: 12, fontWeight: "bold", color: "grey" }}>
                ₪12,670
              </Text>
            )}
            {selectedIndex === 1 && (
              <Text style={{ fontSize: 12, fontWeight: "bold", color: "grey" }}>
                ₪400
              </Text>
            )}
          </View>
          <View
            style={{
              marginTop: 10,
              borderLeftWidth: 1,
              borderLeftColor: "black",
              opacity: 0.1,
            }}
          />
          <View style={styles.centeritems}>
            <View>
              {selectedIndex === 0 && (
                <Caption style={{ fontSize: 10 }}>● מע"מ הכנסות</Caption>
              )}
              {selectedIndex === 1 && (
                <Caption style={{ fontSize: 10 }}>● מע"מ</Caption>
              )}
            </View>
            {selectedIndex === 0 && (
              <Text style={{ fontSize: 12, fontWeight: "bold", color: "grey" }}>
                ₪2,154
              </Text>
            )}
            {selectedIndex === 1 && (
              <Text style={{ fontSize: 12, fontWeight: "bold", color: "grey" }}>
                ₪68
              </Text>
            )}
          </View>
        </View>
      </Card>
        <View style={{ flex: 1 , marginBottom: 100}}>
          {/* <Text>{currentMonth}</Text> */}

          <Agenda
            renderEmptyData={() => null}
            theme={{
              agendaDayMonthColor: "black",
              "stylesheet.agenda.main": {
                header: {
                  height: 0,
                  width: 0,
                },
                knobContainer: {
                  height: 0,
                  width: 0,
                },
                knob: {
                  height: 0,
                  width: 0,
                },
                weekdays: {
                  height: 0,
                  width: 0,
                },
                weekday: {
                  height: 0,
                  width: 0,
                },
                reservations: {
                  flex: 1,
                  marginTop: 10,
                  backgroundColor: "#F1F1F1",
                },
              },
            }}
            items={items}
            loadItemsForMonth={loadItems}
            selected={"2022-05-16"}
            renderItem={renderItem}
          />
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bottomparent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  centeritems: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  dates: {
    marginBottom: 8,
    textAlign: "center",
  },
  title: {
    marginBottom: 8,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  sum: {
    marginBottom: 8,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
  sumin: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    flexDirection: "row",
    // justifyContent: "center",
    height: 10,
    borderRadius: 4,
    marginTop: 50,
    overflow: "hidden",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  box1: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  box2: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8BC34A",
  },
});
export default TransactionsScreen;
