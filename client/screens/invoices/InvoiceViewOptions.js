import React from "react";
import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "@rneui/themed";
import { useCardAnimation } from "@react-navigation/stack";

const InvoiceViewOptions = ({ navigation }) => {
  const { current } = useCardAnimation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        ]}
        onPress={navigation.goBack}
      />
      <Animated.View
        style={{
          padding: 16,
          width: "90%",
          maxWidth: 400,
          borderRadius: 3,
          backgroundColor: "white",
          transform: [
            {
              scale: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <Button
          title="הורדת מסמך"
          containerStyle={{ margin: 5 }}
          buttonStyle={{ justifyContent: "flex-start" }}
          iconContainerStyle={{ background: "#000" }}
          type="clear"
          icon={<Icon name="download" size={24} color="black" />}
          titleStyle={{ marginHorizontal: 5, color: "black" }}
          onPress={() => console.log("Pressed")}
        />
        <Button
          title="שליחת מסמך למייל"
          titleStyle={{ marginHorizontal: 5, color: "black" }}
          iconContainerStyle={{ background: "#000" }}
          containerStyle={{ margin: 5 }}
          buttonStyle={{ justifyContent: "flex-start" }}
          type="clear"
          icon={<Icon name="share" size={24} color="black" />}
          onPress={() => console.log("Pressed")}
        />
        <Button
          title="תיעוד שליחת מסמך"
          containerStyle={{ margin: 5 }}
          titleStyle={{ marginHorizontal: 5, color: "black" }}
          iconContainerStyle={{ background: "#000" }}
          buttonStyle={{ justifyContent: "flex-start" }}
          type="clear"
          icon={<Icon name="account" size={24} color="black" />}
          onPress={() => console.log("Pressed")}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#98B3B7",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  noteHeader: {
    backgroundColor: "#42f5aa",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  footer: {
    flex: 1,
    backgroundColor: "#ddd",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: "stretch",
    color: "black",
    padding: 20,
    backgroundColor: "#ddd",
    borderTopWidth: 2,
    borderTopColor: "#ddd",
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: "#98B3B7",
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default InvoiceViewOptions;
