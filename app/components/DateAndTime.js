import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

function formatTime(date) {
  const hoursOrig = date.getHours();
  const hours = hoursOrig === 0 ? 24 : hoursOrig;
  const minutes = date.getMinutes();
  const meridian = hoursOrig >= 12 ? "PM" : "AM";
  const hoursFormatted = hours > 12 ? String(hours - 12) : String(hours);
  const minutesFormatted = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${hoursFormatted}:${minutesFormatted} ${meridian}`;
}

function DateAndTime(props) {
  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState(null);

  const onChange = (event, selectedDate) => {
    setMode(null);
    setDate(selectedDate);
    props.onChange(selectedDate);
  };

  const showDatepicker = () => {
    setMode("date");
  };

  const showTimepicker = () => {
    setMode("time");
  };
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          marginBottom: SPACING_4,
        }}
      >
        <View style={{ marginRight: SPACING_4, flexGrow: 1 }}>
          <Text style={styles.input}>{date.toDateString()}</Text>
        </View>
        <View style={{ flexGrow: 0 }}>
          <Button onPress={showDatepicker} title="Choose date" />
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ marginRight: SPACING_4, flexGrow: 1 }}>
          <Text style={styles.input}>{formatTime(date)}</Text>
        </View>
        <View>
          <Button onPress={showTimepicker} title="Choose Time" />
        </View>
      </View>

      {mode && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          onChange={onChange}
        />
      )}
    </View>
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
  field: {
    backgroundColor: "#eee",
    padding: 10,
    fontSize: 18,
    marginBottom: SPACING_5,
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
export default DateAndTime;
