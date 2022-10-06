import React from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import * as colors from "../config/colors";

function CreateAccScreen(props) {
  const [username, setUsername] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordRepeat, setPasswordRepeat] = React.useState();
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/FullLogo.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="account"
        onChangeText={(text) => setUsername(text)}
        placeholder="Username"
        keyboardType="default"
      />
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
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => setPasswordRepeat(text)}
        placeholder="Re-enter Password"
        secureTextEntry={true}
        extContentType="password"
      />
      <AppButton
        title="Create Account"
        onPress={() => console.log("Login", email, password)}
      />

      <AppText style={styles.title}>Already has account?</AppText>
      <AppText style={styles.login}>Login</AppText>
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
  login: {
    alignSelf: "center",
    color: colors.link,
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

export default CreateAccScreen;
