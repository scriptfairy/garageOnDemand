import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import SafeViewAndroid from "./SafeViewAndroid";

function Screen({ children, style }) {
  const { padding, ...otherStyles } = style || {};
  return (
    <SafeAreaView
      style={[styles.screen, SafeViewAndroid.AndroidSafeArea, otherStyles]}
    >
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
