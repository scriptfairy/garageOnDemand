import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import BottomTabs from "../components/BottomTabs";
import * as colors from "../config/colors";

function LoginScreen(props) {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/FullLogo.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        placeholder="Email"
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true}
        extContentType="password"
      />
      <AppButton
        title="Login"
        onPress={() => console.log("Login", email, password)}
      />
      <AppText style={styles.title}>Forgot Password?</AppText>
      <BottomTabs />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    alignSelf: "center",
    color: colors.link,
    padding: 20,
    fontWeight: "bold",
  },

  logo: {
    width: 200,
    height: 60,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
