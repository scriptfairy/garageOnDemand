import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./app/screens/HomeScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import CreateAccScreen from "./app/screens/CreateAccScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SearchScreen from "./app/screens/SearchScreen";
import GarageFormScreen from "./app/screens/GarageFormScreen";
import BookingScreen from "./app/screens/BookingScreen";
import PaymentScreen from "./app/screens/PaymentScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import FavoritesScreen from "./app/screens/FavoritesScreen";
import SplashScreen from "./app/screens/SplashScreen";

console.disableYellowBox = true;
const Stack = createNativeStackNavigator();

function MyListingTabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyListings" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
}

export function SearchTabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}

export function FavoritesTabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}

export function AccountTabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
}
export function HomeTabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Create Account" component={CreateAccScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Landing Page" component={SplashScreen} />
      <Stack.Screen name="Garage Form" component={GarageFormScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        labeled
        shifting={false}
        activeColor="#FFF5F4"
        inactiveColor="#AAAD9B"
        barStyle={{ backgroundColor: "#006C8F" }}
      >
        <Tab.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="SearchTabs"
          component={SearchTabs}
          options={{
            title: "Find Parking",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="home-search-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="FavoritesTabs"
          component={FavoritesTabs}
          options={{
            title: "Favorites",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="heart-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MyListingTabs"
          component={MyListingTabs}
          options={{
            title: "My Listings",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="view-list"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="AccountTabs"
          component={AccountTabs}
          options={{
            title: "Account",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
