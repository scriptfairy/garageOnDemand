import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import { black, primary, secondary } from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/garage_08.jpg")}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Secure Carpark</AppText>
        <AppText style={styles.price}>Hourly rate: $20</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/Christine.jpeg")}
            title="Christine Al-Thifairy"
            subTitle="5 starts"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "500" },
  price: {
    color: secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
