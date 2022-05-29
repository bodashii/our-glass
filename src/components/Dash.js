import * as React from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, TouchableOpacity, Button } from "react-native";
import DatePicker from 'react-native-date-picker'




// check JWT to see if user is logged in, if not send to signup/login


function Dash({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tickers</Text>
      <Button title="Create Ticker" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
        setOpen(false)
        }}
      />
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