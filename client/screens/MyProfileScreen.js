import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TopBarNavigator from "../components/TopBarNavigator";

export default function MyProfileScreen(props) {
  return (
    <View style={styles.container}>
      <TopBarNavigator />
      <Image
        style={styles.avatar}
        source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  displayUser: {},
  existButton: {},
  header: {
    backgroundColor: "#00BFFF",
    height: 70,
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    marginTop: "-1px",
    width: 60,
    height: 60,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    // marginTop: 35,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});
