import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Courses = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.welcome}>Courses</Text>
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

export default Courses;
