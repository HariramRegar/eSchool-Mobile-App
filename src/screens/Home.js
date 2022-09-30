import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const Courses = ({navigation}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.welcome}>Home</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.push('home')}
      />
      <Button
        title="Go to Notofications"
        onPress={() => navigation.push('notifications')}
      />
      <Button
        title="Go to Blank"
        onPress={() => navigation.push('blank')}
      />
      <Button
        title="Go to Stats"
        onPress={() => navigation.push('stats')}
      />
      <Button
        title="Go to Results"
        onPress={() => navigation.push('results')}
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
});

export default Courses;
