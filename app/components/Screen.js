import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

function Screen({ children, style }) {
  const { padding, ...otherStyles } = style || {};
  return (
    <SafeAreaView style={[styles.screen, otherStyles]}>
      <View style={{ padding }}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default Screen;
