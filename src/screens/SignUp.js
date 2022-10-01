import React from 'react'
import {
    View,
    Button,
    TextInput,
    StyleSheet,
    Text,
    Image
} from 'react-native'


export default function SignUp({ navigation }) {
    return (
        <>
            <Image style={styles.image} source={require("../assets/mycurve.png")} resizeMode='stretch' />

            <View style={styles.circle}>
                <Image style={styles.imagelogo} source={require("../assets/mylogo.png")} />
            </View>
            <View style={styles.container}>
                <Text style={styles.inputName}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    autoCapitalize="none"
                    placeholderTextColor='pink'
                    onChangeText={val => this.onChangeText('fullname', val)}
                />
                <Text style={styles.inputName}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Email address'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='pink'
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <Text style={styles.inputName}>Class</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Class'
                    autoCapitalize="none"
                    placeholderTextColor='pink'
                    onChangeText={val => this.onChangeText('class', val)}
                />
                <Text style={styles.inputName}>Section</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Section'
                    autoCapitalize="none"
                    placeholderTextColor='pink'
                    onChangeText={val => this.onChangeText('section', val)}
                />
                <Text style={styles.inputName}>Roll No.</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Roll Number'
                    autoCapitalize="none"
                    placeholderTextColor='pink'
                    onChangeText={val => this.onChangeText('roll_no', val)}
                />
                <Text style={styles.inputName}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Phone Number'
                    autoCapitalize="none"
                    placeholderTextColor='pink'
                    onChangeText={val => this.onChangeText('phone_number', val)}
                />
                <Text style={styles.inputName}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    autoCapitalize="none"
                    placeholderTextColor='pink'
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <Button
                    title='Sign Up'
                    // onPress={this.signUp}
                    onPress={() => navigation.push('login')}
                />
            </View></>
    )
    // }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 40,
        backgroundColor: 'white',
        margin: 10,
        padding: 8,
        color: 'black',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    inputName: {
        marginLeft: 30,
        color: '#2b94c2',
        fontSize: 15,
        alignSelf: 'flex-start'
    },
    image: {
        width: "100%",
        height: 60,
    },
    imagelogo: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        borderColor: '#c2652b',
        borderWidth: 5
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: "pink",
        marginTop: -60,
        alignSelf: 'center'
    },
})