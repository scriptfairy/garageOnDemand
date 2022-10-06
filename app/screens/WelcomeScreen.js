import React from "react";
import { Text, Image, ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/FullLogo.png")} />
        <Text style={styles.tagline}>Carpark at Your Request</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton
          title="Create Account"
          onPress={() => navigation.navigate("Create Account")}
          color="secondary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 290,
    height: 90,
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
  tagline: { fontSize: 25, fontWeight: "600", paddingVertical: 20 },
});
export default WelcomeScreen;
