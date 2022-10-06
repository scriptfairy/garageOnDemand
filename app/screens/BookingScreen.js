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
import DateAndTime from "../components/DateAndTime";
import * as colors from "../config/colors";
import AppButton from "../components/AppButton";

const fieldValues = {
  address: "10 Don Street, Newtown NSW",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  hourlyRate: 10,
};

function calculateFee(hourlyRate, fromDate, toDate) {
  const t1 = fromDate.getTime();
  const t2 = toDate.getTime();
  const hours = Math.floor((t2 - t1) / (60 * 60 * 1000));
  return hourlyRate * hours;
}

function BookingScreen({ navigation }) {
  const [fromDateTime, setFromDateTime] = React.useState(null);
  const [toDateTime, setToDateTime] = React.useState(null);
  const [hourlyRate, setHourlyRate] = React.useState(fieldValues.hourlyRate);

  const fee =
    fromDateTime && toDateTime
      ? calculateFee(hourlyRate, fromDateTime, toDateTime)
      : 0;

  return (
    <Screen>
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Book Garage</Text>
        <Text style={styles.label}>Address</Text>
        <Text style={styles.field}>{fieldValues.address}</Text>
        <Text style={styles.label}>Hourly Rate{hourlyRate}</Text>
        <TextInput
          style={styles.field}
          value={hourlyRate}
          onChangeText={(value) => {
            setHourlyRate(value);
          }}
          keyboardType="numeric"
        />
        <View>
          <View style={styles.datesContainer}>
            <Text style={styles.label}>From</Text>
            <DateAndTime onChange={setFromDateTime} />
          </View>
          <View style={styles.datesContainer}>
            <Text style={styles.label}>To</Text>
            <DateAndTime onChange={setToDateTime} />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Total Fee</Text>
          <Text
            style={{
              ...styles.field,
              fontWeight: "bold",
            }}
          >
            ${fee}
          </Text>
        </View>

        <View>
          <AppButton
            title="Place Booking"
            onPress={() => navigation.navigate("Payment")}
            style={{ backgroundColor: colors.primary }}
          />
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
    marginBottom: SPACING_2,
  },
  field: {
    backgroundColor: "#eee",
    padding: 10,
    fontSize: 18,
    marginBottom: SPACING_4,
  },
  input: {
    borderWidth: 1,
    padding: SPACING_4,
    fontSize: 18,
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
  datesContainer: {
    marginBottom: SPACING_5,
  },
});

export default BookingScreen;
