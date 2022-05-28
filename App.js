import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as Sharing from 'expo-sharing';
// import { Platform } from 'expo-modules-core';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This Works.</Text>
      <TouchableOpacity>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   },
  // logo: {
  //   width: 305,
  //   height: 159,
  //   marginBottom: 10,
  // },
  // instructions: {
  //   color: '#888',
  //   fontSize: 18,
  //   marginHorizontal: 15,
  // },
  // button: {
  //   backgroundColor: 'blue',
  //   padding: 20,
  //   borderRadius: 5,
  // },
  // buttonText: {
  //   fontSize: 20,
  //   color: '#fff',
  // },
  // thumbnail: {
  //   width: 300,
  //   height: 300,
  //   resizeMode: 'cover'
  // }
});
