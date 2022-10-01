import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";

const Courses = ({ navigation }) => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/mycurve.png")} resizeMode='stretch' />

      <View style={styles.circle}>
        <Image style={styles.imagelogo} source={require("../assets/icon.jpeg")} />
      </View>
      <View style={styles.messagebox}>
        <View style={styles.message}>
          <Text style={styles.messageTitle}>Welcome message</Text>
          <Text style={styles.messageBody}>The standard Lorem Ipsum passage
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
        </View>
      </View>
      <View style={styles.optionrow}>
        <View style={styles.option}>
          <Image style={styles.optionimage} source={require("../assets/Attendance.png")} />
          <Button style={styles.button}
            title="Attendance"
            onPress={() => navigation.push('home')}
          />
        </View>
        <View style={styles.option}>
          <Image style={styles.optionimage} source={require("../assets/Homework.png")} />
          <Button style={styles.button}
            title="Homework"
            onPress={() => navigation.push('home')}
          />
        </View>
        <View style={styles.option}>
          <Image style={styles.optionimage} source={require("../assets/Exam.png")} />
          <Button style={styles.button}
            title="Results"
            onPress={() => navigation.push('home')}
          />
        </View>
      </View>
      <View style={styles.optionrow}>
        <View style={styles.option}>
          <Image style={styles.optionimage} source={require("../assets/TodoList.png")} />
          <Button style={styles.button}
            title="Exam Routine"
            onPress={() => navigation.push('home')}
          />
        </View>
        <View style={styles.option}>
          <Image style={styles.optionimage} source={require("../assets/IdeaSharing.png")} />
          <Button style={styles.button}
            title="Solutions"
            onPress={() => navigation.push('home')}
          />
        </View>
        <View style={styles.option}>
          <Image style={styles.optionimage} source={require("../assets/Questions.png")} />
          <Button style={styles.button}
            title="Notice Board"
            onPress={() => navigation.push('home')}
          />
        </View>
      </View>
      <View style={styles.optionrow}>
        <View style={styles.option}>
          <Image style={styles.optionimage} source={require("../assets/AddUserMale.png")} />
          <Button style={styles.button}
            title="Add User"
            onPress={() => navigation.push('home')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 25,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: "pink",
    marginTop: -90,
    alignSelf: 'center'
  },
  image: {
    width: "100%",
    height: 150,
  },
  messagebox: {
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'flex-start',
    backgroundColor: '#0fcef5',
    borderRadius: 20,
    margin: 10
  },
  message: {
    margin: 10
  },
  messageTitle: {
    fontSize: 18,
    // margin:10
  },
  messageBody: {
    fontSize: 12,
    // margin: 10
  },
  imagelogo: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderColor: '#c2652b',
    borderWidth: 5
  },
  optionrow: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  option: {
    margin: 5
  },
  optionimage: {
    height: 90,
    width: 90,
    margin: 10,
    borderRadius: 10,
    // borderColor: 'orange',
    // borderWidth: 2,
    backgroundColor: '#FFFF'
  },
  button: {
    borderRadius: 30,
  }
});

export default Courses;
