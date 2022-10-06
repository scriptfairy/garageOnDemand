import React from "react";
import { StyleSheet, Image, View, TextInput } from "react-native";
import Carousel from "react-native-snap-carousel";
import Screen from "../components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AppText from "../components/AppText";
import * as colors from "../config/colors";

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

function CreateAccScreen(props) {
  const [suburb, setSuburb] = React.useState();

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/FullLogo.png")} />
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} placeholder="Search" />
        <View style={styles.iconContainer}>
          <FontAwesome.Button
            name="search"
            color="gray"
            backgroundColor="transparent"
            style={styles.icon}
            size={24}
          />
        </View>
      </View>

      <AppText style={styles.title}>My Current Bookings</AppText>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 5,
        }}
      >
        <AppText style={styles.address}> 12 Don Street Newtown, NSW </AppText>
        <MaterialCommunityIcons
          name="map-marker"
          size={25}
          style={{ color: colors.primary }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 5,
        }}
      >
        <AppText>Time 1:00pm - 3:00pm</AppText>
        <AppText>Date: 12/12/2022</AppText>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Carousel
          data={carouselItems}
          sliderWidth={400}
          itemWidth={200}
          renderItem={renderItem}
        />
      </View>
      <AppText
        style={{ color: colors.link, textAlign: "center", fontWeight: "bold" }}
      >
        View Details
      </AppText>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    alignSelf: "center",
    color: colors.medium,
    padding: 20,
  },
  address: {
    color: colors.dark,
    fontWeight: "bold",
  },
  logo: {
    width: 200,
    height: 60,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
  },
  iconContainer: {
    position: "absolute",
    width: 50,
    right: 10,
    top: 10,
  },
  searchContainer: {
    position: "relative",
  },
});

export default CreateAccScreen;
