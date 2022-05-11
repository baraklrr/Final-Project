import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Avatar } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ListItem } from "@rneui/themed";
const ExpensesListItem = () => {
  return (
    <ListItem>
      <ListItem.Content>
        <ListItem.Title style={{ color: "white", fontWeight: "bold" }}>
          Chris Jackson
        </ListItem.Title>
        <ListItem.Subtitle style={{ color: "white" }}>
          Vice Chairman
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron color="white" />
    </ListItem>
  );
};

const styles = StyleSheet.create({});
export default ExpensesListItem;
