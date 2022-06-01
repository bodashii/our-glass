import * as React from 'react';
import { Text, View, Pressable } from "react-native";



// check JWT to see if user is logged in, if not send to signup/login


// add light/dark mode toggle

// change username

// change password

// update email

// delete account

// sign out function and button


function Account({ navigation }) {
  return (
    <View 
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is your account!</Text>
      <Pressable
        title='ourGlass'
        onPress={() => navigation.navigate('ourGlass')}
      />
    </View>
  );
}



export default Account;