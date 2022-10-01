import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";

const LoginOptions = ({ navigation }) => {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/mycurve.png")} resizeMode='stretch' />

            <View style={styles.circle}>
                <Image style={styles.imagelogo} source={require("../assets/mylogo.png")} />
            </View>
            <View style={styles.mainText}>
                <Text style={styles.welcome}>Choose your option</Text>
            </View>
            <View style={styles.optionrow}>
                <View style={styles.option}>
                    <Image style={styles.optionimage} source={require("../assets/StudentMale.png")} />
                    <Button style={styles.button}
                        title="Student"
                        onPress={() => navigation.push('login')}
                    />
                </View>
                <View style={styles.option}>
                    <Image style={styles.optionimage} source={require("../assets/Tuition.png")} />
                    <Button style={styles.button}
                        title="Teacher"
                        onPress={() => navigation.push('login')}
                    />
                </View>
            </View>
            <View style={styles.optionrow}>
                <View style={styles.option}>
                    <Image style={styles.optionimage} source={require("../assets/Person.png")} />
                    <Button
                        title="Parent"
                        onPress={() => navigation.push('login')}
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
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        backgroundColor: "white",
        marginTop: -100,
        alignSelf: 'center'
    },
    image: {
        width: "100%",
        height: 200,
    },
    mainText: {
        marginTop: 30,
        marginBottom: 30,
        alignItems: 'center'
    },
    imagelogo: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: 'orange',
        borderWidth: 5
    },
    optionrow: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    option: {
        margin: 20
    },
    optionimage: {
        height: 100,
        width: 100,
        margin: 10,
        borderRadius: 10,
        borderColor: 'orange',
        borderWidth: 2,
        backgroundColor: 'green'
    },
    button: {
        borderRadius: 30,
    }
});

export default LoginOptions;
