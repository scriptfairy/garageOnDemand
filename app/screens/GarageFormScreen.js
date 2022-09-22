import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  Button,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import * as colors from "../config/colors";

const photos = [
  require("../assets/garage_08.jpg"),
  require("../assets/garage_08.jpg"),
  require("../assets/garage_08.jpg"),
  require("../assets/garage_08.jpg"),
];

const formValues = {
  address: "10 Don Street, Newtown NSW",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  rate: "$20",
};

function GarageFormScreen(props) {
  const [address, setAddress] = React.useState(formValues.address);
  const [description, setDescription] = React.useState(formValues.description);
  const [rate, setRate] = React.useState(formValues.rate);
  const [showPhotos, setShowPhotos] = React.useState(false);
  return (
    <Screen>
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Add Garage</Text>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAddress}
          value={address}
          placeholder="Enter address"
        />
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={4}
          onChangeText={setDescription}
          value={description}
          placeholder="Enter description"
        />
        <Text style={styles.label}>Hourly Rate</Text>
        <TextInput
          style={styles.input}
          onChangeText={setRate}
          value={rate}
          placeholder="Enter hourly rate"
        />
        <Text style={styles.label}>Photos</Text>
        <View style={styles.photosActionContainer}>
          <MaterialCommunityIcons
            name="camera"
            size={MATERIAL_ICON_SIZE_LARGE}
            onPress={() => {
              setShowPhotos(!showPhotos);
            }}
          />
          <MaterialCommunityIcons
            name="view-gallery"
            size={MATERIAL_ICON_SIZE_LARGE}
            onPress={() => {
              setShowPhotos(!showPhotos);
            }}
          />
        </View>
        {showPhotos && (
          <View style={styles.photosContainer}>
            {photos.map((photo, index) => {
              return (
                <View key={index} style={styles.photoContainer}>
                  <Image style={styles.photo} source={photo} />
                </View>
              );
            })}
          </View>
        )}
        <View style={styles.formActionContainer}>
          <View style={styles.formActionButton}>
            <Button
              title="Save"
              disabled={!showPhotos}
              onPress={() => {
                console.log("Save");
              }}
            />
          </View>
          <View style={styles.formActionButton}>
            <Button title="Cancel" color={colors.medium} />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const SPACING_1 = 1;
const SPACING_2 = 2;
const SPACING_3 = 4;
const SPACING_4 = 8;
const SPACING_5 = 16;
const SPACING_6 = 32;
const SPACING_7 = 64;
const SPACING_8 = 128;

const MATERIAL_ICON_SIZE_SMALL = 16;
const MATERIAL_ICON_SIZE_MEDIUM = 24;
const MATERIAL_ICON_SIZE_LARGE = 36;
const MATERIAL_ICON_SIZE_VERY_LARGE = 48;

const FA_ICON_SIZE_SMALL = 14;
const FA_ICON_SIZE_MEDIUM = 18;
const FA_ICON_SIZE_LARGE = 24;
const FA_ICON_SIZE_VERY_LARGE = 36;

const styles = StyleSheet.create({
  container: {
    padding: SPACING_5,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: SPACING_5,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: SPACING_3,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    marginBottom: SPACING_5,
  },
  photosActionContainer: {
    flexDirection: "row",
    marginBottom: SPACING_3,
  },
  photosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: SPACING_5,
  },
  photoContainer: {
    width: "50%",
    padding: SPACING_4,
  },
  photo: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  formActionContainer: {
    width: "100%",
    flexDirection: "row",
    marginBottom: SPACING_7,
  },
  formActionButton: {
    width: "50%",
    padding: SPACING_3,
  },
});

export default GarageFormScreen;
