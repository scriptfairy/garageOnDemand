import React from "react";
import { Text, Image, ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Find or Rent a Carpark</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
export default WelcomeScreen;
