import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const LoginOptions = ({navigation}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.welcome}>Login Options</Text>
      <Button
        title="Student"
        onPress={() => navigation.push('login')}
      />
      <Button
        title="Teacher"
        onPress={() => navigation.push('login')}
      />
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
  circle: {
    width: 400,
    height: 400,
    borderRadius: 400 / 2,
    backgroundColor: "orange",
    bottom:-400
  },
  image: {
    marginBottom: 40,
    width: 120,
    height: 120,
  },
});

export default LoginOptions;
