import React, { useState } from 'react';
import { Text, Switch, ScrollView, SafeAreaView,  StyleSheet, TextInput, TouchableOpacity, Button, View} from "react-native";

function LogIn({ navigation }) {

    return (
      <SafeAreaView style={styles.container} >
         <ScrollView style={styles.scrollView}>
          <Text style={styles.titleText}>User Name:</Text>
          <TextInput
          style={styles.input}
          placeholder="Type your ticker title here"
          placeholderTextColor="cadetblue"
          keyboardType="numeric"
          focusable={true}
          />
          <Text style={styles.titleText}>Password:</Text>
          <TextInput
          style={styles.input}
          placeholder="Type description here (230 char max)"
          placeholderTextColor="cadetblue"
          keyboardType="numeric"
          focusable={true}
          />
          <Text style={styles.titleText}>Email:</Text>
          <TextInput
          style={styles.input}
          placeholder="Type description here (230 char max)"
          placeholderTextColor="cadetblue"
          keyboardType="numeric"
          focusable={true}
          />      
     
          <TouchableOpacity
               style = {styles.submitButton}
              //  onPress = {
              >
               <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      margin: 20,
    },
    submitButton: {
      backgroundColor: 'cadetblue',
      padding: 10,
      margin: 15,
      height: 40,
      borderRadius: 5,
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center',
   },
   titleText: {
     fontSize: 16
   }
});
  
export default LogIn