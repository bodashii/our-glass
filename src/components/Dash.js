import * as React from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, TouchableOpacity } from "react-native";




// check JWT to see if user is logged in, if not send to signup/login


function Dash({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tickers</Text>
      <Text>Disappointment</Text>
      <TextInput placeholder='username' type='text' />
      <TouchableOpacity><Text>Submit</Text></TouchableOpacity>
      

      <Pressable
        title='Account'
        onPress={() => navigation.navigate('Account')}
      />
      <Pressable
        title='Create TimeBomb'
        onPress={() => navigation.navigate('TickerForm')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dash;