import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ButtonGroup, Text } from 'react-native-elements'




export default function ForgetPasswordPage() {
  return (
    <View style={styles.container}>
      <Text>Reset your password</Text>
      <Text>Enter your email address and we will send you a new password</Text>
      <TextInput name="password" placeholder="password" />
      <TextInput name="email" placeholder="email" />
      <TouchableOpacity
        style={styles.submitButton}
      //  onPress = {
      >
        <Text style={styles.submitButtonText}> Submit </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text>New to the site?</Text>
        <Pressable
        title='Create an account'
        onPress={() => navigation.navigate('RegisterPage')}
        />
        <Pressable
        title='Home Page'
        onPress={() => navigation.navigate('HomePage')}
        />
      </View>
    </View>
  );
}

    // <div className="text-center m-5-auto">
    //     <h2>Reset your password</h2>
    //     <h5>Enter your email address and we will send you a new password</h5>
    //     <form action="/login">
    //         <p>
    //             <label id="reset_pass_lbl">Email address</label><br />
    //             <input type="email" name="email" required />
    //         </p>
    //         <p>
    //             <button id="sub_btn" type="submit">Send password reset email</button>
    //         </p>
    //     </form>
    //     <footer>
    //         <p>New to the site? <Link to="/register">Create an account</Link>.</p>
    //         <p><Link to="/">Back to Homepage</Link>.</p>
    //     </footer>
    // </div>

      const styles = StyleSheet.create({
        container: {
        flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
  },
});

