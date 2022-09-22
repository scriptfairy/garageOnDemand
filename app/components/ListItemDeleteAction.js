import React from "react";
import { View, StyleSheet } from "react-native";

import { danger } from "../config/colors";
function ListItemDeleteAction(props) {
  console.log("ListItemDeleteAction SWIPE");
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: danger,
    width: 70,
  },
});
export default ListItemDeleteAction;
