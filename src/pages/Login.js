import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { Text, ScrollView, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native";



function Login({ navigation } , props) {
  const [formState, setFormState] = useState({ email: '', password: ' ' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    })
  }

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
            onChange={handleChange}
          />
          <Text style={styles.titleText}>Password:</Text>
          <TextInput
          style={styles.input}
          placeholder="Type description here (230 char max)"
          placeholderTextColor="cadetblue"
          keyboardType="numeric"
            focusable={true}
            onChange={handleChange}
          />
          <Text style={styles.titleText}>Email:</Text>
          <TextInput
          style={styles.input}
          placeholder="Type description here (230 char max)"
          placeholderTextColor="cadetblue"
          keyboardType="numeric"
            focusable={true}
            onChange={handleChange}
          />      
     
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleFormSubmit}
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
  
export default Login