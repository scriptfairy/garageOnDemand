import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// import { primary } from "../config/colors";
// import { white } from "../config/colors";

import * as colors from "../config/colors";

function AppButton(props) {
  const { title, onPress, color = "primary" } = props;
  const style = [styles.button, { backgroundColor: colors[color] }];
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default AppButton;
