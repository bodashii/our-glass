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
import BackgroundImage from '../../assets//bglanding.png'

function LandingPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>login / register page</Text>
            <Text>Don't waste time! Join us now!</Text>
            <TextInput name="password" placeholder="password" />
            <TextInput name="email" placeholder="email" />
            <Pressable
                title='Log in'
                onPress={() => navigation.navigate('LoginPage')}
            />
            <Pressable
                title='Create an account'
                onPress={() => navigation.navigate('RegisterPage')}
            />
        </View>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

export default LandingPage