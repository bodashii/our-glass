import React from 'react'
import { Link } from 'react-router-dom'
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { ButtonGroup, Text } from 'react-native-elements'

import './App.css'

function SignUpPage({ navigation }) {

    return (
        <View style={StyleSheet.container}>
            <Text>Join Our-Glass!</Text>
            <TextInput name="email" placeholder="email" />
            <TextInput name="password" placeholder="password" />
            <Text>Forgot password?</Text>
            <Pressable
                title='forgot password'
                onPress={() => navigation.navigate('ForgetPasswordPage')}
            />
            <Text>Slide switch to agree to terms and conditions</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <Pressable
                title='Register account'
                onPress={() => navigation.navigate('LoginPage')}
            />
            <Pressable
                title='Home Page'
                onPress={() => navigation.navigate('HomePage')}
            />
        </View>
    )
}

export default SignUpPage