import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import Carousel from "react-native-snap-carousel";
import AppButton from "../components/AppButton";
import { black, primary, secondary } from "../config/colors";

const carouselItems = [
  {
    id: 1,
    image: require("../assets/fav_garage01.png"),
  },
  {
    id: 2,
    image: require("../assets/fav_garage_02.png"),
  },
  {
    id: 3,
    image: require("../assets/fav_garage_03.png"),
  },
  {
    id: 4,
    image: require("../assets/fav_garage_04.png"),
  },
];

function renderItem({ item, index }) {
  return (
    <Image
      style={{ width: 200, height: 200 }}
      resizeMode="cover"
      source={item.image}
    />
  );
}
function ListingDetailsScreen(props) {
  return (
    <View style={styles.detailsContainer}>
      <AppText style={styles.title}>59 Marian Street, Enmore, NSW</AppText>
      <AppText style={styles.price}>Hourly rate: $20</AppText>
      <View style={{ marginBottom: 20 }}>
        <Carousel
          data={carouselItems}
          sliderWidth={400}
          itemWidth={200}
          renderItem={renderItem}
        />
      </View>
      <AppButton title="Edit" />
      <AppButton title="Delete" />
      <AppButton title="Add" />
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
