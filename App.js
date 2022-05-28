import * as React from 'react';
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppLoading } from 'expo-app-loading'
import { useFonts, stalemate } from '@expo-google-fonts/stalemate';

import Tabs from './navigation/Tabs'


// authorize jwt if true dash else account/signup/login
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}