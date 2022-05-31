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

function SignInPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Sign in to Our-Glass</Text>
            <Pressable
                title='Home Page'
                onPress={() => navigation.navigate('HomePage')}
            />
            <View>
                <Text>Username or email address</Text>
                <TextInput name="email" placeholder="email" />
                <TextInput name="password" placeholder="password" />
                <Text>Forgot password?</Text>
                <Pressable
                    title='forgot password'
                    onPress={() => navigation.navigate('ForgetPasswordPage')}
                />
            </View>
            <Pressable
                title='Log in'
                onPress={() => navigation.navigate('LoginPage')}
            />
            <Text>New to the site?</Text>
            <Pressable
                title='Create an account'
                onPress={() => navigation.navigate('RegisterPage')}
            />
        </View>
    )
}

{/* <div className="text-center m-5-auto">
    <h2>Sign in to Our-Glass</h2>
    <form action="/home">
        <p>
            <label>Username or email address</label><br />
            <input type="text" name="first_name" required />
        </p>
        <p>
            <label>Password</label>
            <Link to="/forget-password"><label className="right-label">Forgot password?</label></Link>
            <br />
            <input type="password" name="password" required />
        </p>
        <p>
            <button id="sub_btn" type="submit">Login</button>
        </p>
    </form>
    <footer>
        <p>New to the site? <Link to="/register">Create an account</Link>.</p>
        <p><Link to="/">Back to Homepage</Link>.</p>
    </footer>
</div> */}


export default SignInPage