import React from "react";
import { View } from "react-native";
import AppButton from "../components/AppButton";

function HomeScreen({ navigation }) {
  return (
    <View>
      <AppButton
        title="Welcome"
        onPress={() => {
          navigation.navigate("Welcome");
        }}
      />
      <AppButton
        title="Search"
        onPress={() => {
          navigation.navigate("Search");
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

      <AppButton
        title="My Account"
        onPress={() => {
          navigation.navigate("My Account");
        }}
      />
      <AppButton
        title="Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
}

export default HomeScreen;
