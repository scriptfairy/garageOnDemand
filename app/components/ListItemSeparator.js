import React from "react";
import { View, StyleSheet } from "react-native";
import { light } from "../config/colors";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: { width: "100%", height: 1, backgroundColor: light },
});
export default ListItemSeparator;
