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

function HomePage({ navigation }) {
    return (
        <View>
            <Text>Welcome to Our-Glass!</Text>
            <Pressable
                title='Log out'
                onPress={() => navigation.navigate('/')}
            />
        </View>
    )
}

export default HomePage