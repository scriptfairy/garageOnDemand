import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { black, primary, secondary } from "../config/colors";

function ViewImageScreen(prop) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: primary,
    position: "absolute",
    top: 50,
    left: 30,
  },
  container: {
    backgroundColor: black,
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: secondary,
    position: "absolute",
    top: 50,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
