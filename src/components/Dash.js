import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, Pressable, TextInput, TouchableOpacity } from "react-native";
import TickerCard from './TickerCard'



// check JWT to see if user is logged in, if not send to signup/login


function Dash({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <TickerCard />
      <TextInput placeholder='username' type='text' />
      <Pressable
        title='Account'
        onPress={() => navigation.navigate('Account')}
      />
      <Pressable
        title='Create TimeBomb'
        onPress={() => navigation.navigate('TickerForm')}
      />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C5E063',
  },
});

export default Dash;