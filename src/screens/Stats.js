import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Stats = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.welcome}>Stats</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 25,
  },
  header: {
    paddingTop: 200,
    paddingHorizontal: 20,
  },
});

export default Stats;
