import react from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";

export default function App() {
  console.log("App executed");
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native</Text>
      <Image
        source={{
          width: 100,
          height: 100,
          uri: "https://picsum.photos/100/100",
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
