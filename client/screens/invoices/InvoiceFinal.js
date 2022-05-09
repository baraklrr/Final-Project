placeholder="סכום"
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Share
} from "react-native";
import { Button, Card } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "../../components/Header";

const InvoiceFinal = ({ navigation }) => {

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Card>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Icon
            name="check-circle"
            type="ionicon"
            size={70}
            color="lightgreen"
          />
        </View>
        <Header style={{ textAlign: "center", marginTop: 15, color: "black" }}>
          24 יולי, 2022
        </Header>
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
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        </Text>
        <View style={{ flex: 1, padding: 5, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: "grey" }}>סכום ההכנסה (ללא מע"מ)</Text>
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
          <View style={{ padding: 5, flexDirection: "row" }}>
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
      </Card>
      <View style={styles.bottomContainer}>
        <View style={{ flex: 4 }}>
          <Button
            title={"צפייה בהכנסה"}
            onPress={() => navigation.navigate("צפה בהכנסה")}
            containerStyle={{
              padding: 15,
              marginVertical: 10,
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            icon={<Icon name="upload" size={24} color="white" />}
            iconContainerStyle={{ background: "#000" }}
            onPress={onShare}
            containerStyle={{
              padding: 15,
              marginVertical: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    marginTop: "auto",
    flexDirection: "row",
    padding: 5,
  },
});

export default InvoiceFinal;
