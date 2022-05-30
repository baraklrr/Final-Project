import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Card } from "@rneui/themed";
import { Caption } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TransactionsScreen = () => {
  
    const [selectedIndex, setselectedIndex] = useState(-1);
    const handleIndexChange = (index) => {
      setselectedIndex(index);
    };
    return (
    <View>
      <Text style={styles.dates}>ינואר - פברואר</Text>
      <Text style={styles.title}>יתרה דו-חודשית לעסק</Text>
      <Text style={styles.sum}>₪14,357</Text>
      <Card>
        <View style={styles.parent}>
          <TouchableWithoutFeedback onPress={() => handleIndexChange(0)}>
            <View
              style={{
                opacity: selectedIndex === -1 ? 1 : selectedIndex === 0 ? 1 : 0.4,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="menu-down" size={24} color="green" />
                <Caption>הכנסות</Caption>
              </View>
              <Text style={styles.sumin}>₪14,825</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleIndexChange(1)}>
            <View
              style={{
                opacity: selectedIndex === -1 ? 1 : selectedIndex === 1 ? 1 : 0.4,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
              {selectedIndex === 0 && <Caption style={{ fontSize: 10 }}>● יתרה (נטו)</Caption>}
              {selectedIndex === 1 && <Caption style={{ fontSize: 10 }}>● הוצאה מוכרת</Caption>}
            </View>
            {selectedIndex === 0 && (
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'grey' }}>₪12,670</Text>
            )}
            {selectedIndex === 1 && (
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'grey' }}>₪400</Text>
            )}
          </View>
          <View
            style={{
              marginTop: 10,
              borderLeftWidth: 1,
              borderLeftColor: 'black',
              opacity: 0.1,
            }}
          />
          <View style={styles.centeritems}>
            <View>
              {selectedIndex === 0 && <Caption style={{ fontSize: 10 }}>● מע"מ הכנסות</Caption>}
              {selectedIndex === 1 && <Caption style={{ fontSize: 10 }}>● מע"מ</Caption>}
            </View>
            {selectedIndex === 0 && (
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'grey' }}>₪2,154</Text>
            )}
            {selectedIndex === 1 && (
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'grey' }}>₪68</Text>
            )}
          </View>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
    parent: {
      flexDirection: "row",
      justifyContent: "space-around",
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
