import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";




export default function ForgetPasswordPage() {
  return (
    <View style={styles.container}>
      <Text>Reset your password</Text>
      <Text>Enter your email address and we will send you a new password</Text>
          <TextInput name="fpassword" placeholder="password" />
          
    </View>
    // <div className="text-center m-5-auto">
    //     <h2>Reset your password</h2>
    //     <h5>Enter your email address and we will send you a new password</h5>
    //     <form action="/login">
    //         <p>
    //             <label id="reset_pass_lbl">Email address</label><br/>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

