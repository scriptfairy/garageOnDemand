import React from "react";
import { View } from "react-native";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

function HomeScreen({ navigation }) {
  return (
    <Screen>
      <AppButton
        options={{ headerStyle: { backgroundColor: "#f4511e" } }}
        title="Welcome"
        name="Welcome"
        onPress={() => {
          navigation.navigate("Welcome");
        }}
      />

      <AppButton
        title="Landing Page"
        onPress={() => {
          navigation.navigate("Landing Page");
        }}
      />
      <AppButton
        title="Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />

      <AppButton
        title="Garage Form"
        onPress={() => {
          navigation.navigate("Garage Form");
        }}
      />
      <AppButton
        title="Booking"
        onPress={() => {
          navigation.navigate("Booking");
        }}
      />
    </Screen>
  );
}

export default HomeScreen;
