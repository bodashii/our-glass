import * as React from 'react';
import { Text, View, Button } from "react-native";



// check JWT to see if user is logged in, if not send to signup/login


function Dash({ navigation }) {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>ourGlass</Text>
      <Text> developed by: Antony, Brandon, Mark, Nicolas, Vivianna</Text>
      <Button
        title='Account'
        onPress={() => navigation.navigate('Account')}
      />
    </View>
  );
}

export default Dash;