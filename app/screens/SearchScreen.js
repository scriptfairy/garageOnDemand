import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Keyboard,
  ImageBackground,
  Text,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Screen from "../components/Screen";

// https://iconsplace.com/red-icons/garage-icon-14/

const garagePositions = [
  { top: 100, left: 50, text: "$10" },
  { top: 200, left: 150, text: "$20" },
  { top: 300, left: 200, text: "$15" },
];

function SearchScreen(props) {
  const [address, setAddress] = React.useState("");
  const [showMap, setShowMap] = React.useState(false);
  return (
    <Screen>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setAddress(value);
            setShowMap(false);
          }}
          value={address}
          placeholder="Search"
        />
        <View style={styles.iconContainer}>
          <FontAwesome.Button
            name="search"
            color="gray"
            backgroundColor="transparent"
            style={styles.icon}
            size={24}
            onPress={() => {
              setShowMap(true);
              Keyboard.dismiss();
            }}
          />
        </View>
      </View>
      {showMap && (
        <View style={styles.mapContainer}>
          <Image
            style={styles.mapImage}
            source={require("../assets/map2.jpeg")}
          />
          {garagePositions.map((garagePosition, index) => {
            return (
              <ImageBackground
                key={index}
                style={{
                  ...styles.mapIcon,
                  top: garagePosition.top,
                  left: garagePosition.left,
                }}
                source={require("../assets/garage-icon-14-256.png")}
              >
                <Text style={{ fontWeight: "bold", top: -15 }}>
                  {garagePosition.text}
                </Text>
              </ImageBackground>
            );
          })}
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
  },
  searchContainer: {
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    width: 50,
    right: 10,
    top: 10,
  },
  icon: {
    width: "100%",
  },
  mapContainer: {
    position: "relative",
  },
  mapImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 0.5,
  },
  mapIcon: {
    width: 40,
    height: 40,
    position: "absolute",
  },
});

export default SearchScreen;
