import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import * as colors from "../config/colors";
import AppText from "./AppText";

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColour: colors.white,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
});

function Card({ title, subTitle, image }) {
  //const x = JSON.stringify(styles.image);
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <AppText>{title}</AppText>
      <AppText>{subTitle}</AppText>
    </View>
  );
}

export default Card;
