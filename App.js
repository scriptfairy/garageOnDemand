import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, TextInput, Text, Switch } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen from "./app/components/Screen";

import HomeScreen from "./app/screens/HomeScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SearchScreen from "./app/screens/SearchScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import GarageFormScreen from "./app/screens/GarageFormScreen";
import BookingScreen from "./app/screens/BookingScreen";
import AccountScreen from "./app/screens/AccountScreen";
import LoginScreen from "./app/screens/LoginScreen";

import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AppTextInput from "./app/components/AppTextInput";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Garage Form" component={GarageFormScreen} />
        <Stack.Screen name="My Account" component={AccountScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
