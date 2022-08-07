import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  console.log("App is executed");
  return <ViewImageScreen />;
}
