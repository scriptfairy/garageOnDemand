import React from "react";
import { StyleSheet, Image, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import * as colors from "../config/colors";

function PaymentScreen(props) {
  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState(null);
  const onChange = (event, selectedDate) => {
    setMode(null);
    setDate(selectedDate);
    onChange(selectedDate);
  };
  const [nameOnCard, setNameOnCard] = React.useState();
  const [cardNumber, setCardNumber] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordRepeat, setPasswordRepeat] = React.useState();
  return (
    <Screen style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require("../assets/visa.png")} />
        <Image style={styles.logo} source={require("../assets/master.png")} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <AppText style={styles.amount}>Payment Amount:</AppText>
        <AppText style={styles.amtVal}>$20</AppText>
      </View>
      <AppTextInput
        autoCapitalize="words"
        autoCorrect={false}
        icon="account"
        value="Mehry Paboos"
        onChangeText={(text) => setNameOnCard(text)}
        placeholder="Name on Card"
        keyboardType="default"
      />
      <AppTextInput
        autoCorrect={false}
        icon="credit-card"
        value="123456789"
        onChangeText={(text) => setCardNumber(text)}
        placeholder="Card Number"
        keyboardType="number-pad"
      />
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "50%", paddingRight: 5 }}>
          <AppText style={styles.label}>Expiry</AppText>
          <AppTextInput>01 / 2026</AppTextInput>
        </View>
        <View style={{ width: "50%", paddingLeft: 5, marginBottom: 20 }}>
          <AppText style={styles.label}>Security Code</AppText>
          <AppTextInput>987</AppTextInput>
        </View>
      </View>
      <AppButton title="Pay $20" onPress={() => console.log("Payment")} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  amount: {
    color: colors.medium,
    marginRight: 10,
  },
  amtVal: {
    fontWeight: "bold",
    fontSize: 20,
  },
  imageContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
    justifyContent: "center",
    marginBottom: 10,
  },
  title: {
    alignSelf: "center",
    color: colors.medium,
    padding: 20,
  },
  logo: {
    width: "50%",
    aspectRatio: 2,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});

export default PaymentScreen;
