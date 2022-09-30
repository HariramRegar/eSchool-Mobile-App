import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const Blank= ({navigation}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.welcome}>Blank</Text>
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

export default Blank;
