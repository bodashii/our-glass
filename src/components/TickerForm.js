import React, { useState } from 'react';
import { Text, Switch, ScrollView, SafeAreaView,  StyleSheet, TextInput, TouchableOpacity, Button, View} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { NavigationEvents } from 'react-navigation';

// use moment.js to grab current time and then get the difference
// use function to create ticker element

function TickerForm({ navigation }) {
  const [chosenDate, setChosenDate] = useState(new Date());

  async function onSubmit(e) {
    e.preventDefault();

    const newTicker = { ...chosenDate };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      HEADERS: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTicker),
    })
      .catch(err => {
        window.alert(error);
        return;
      })
    
    setForm();
    navigate('')
  }
  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate;
  //   setShow(false);
  //   setDate(currentDate);
  // };
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  this.state = {title: ''}
    return (
      <SafeAreaView style={styles.container} >
         <ScrollView style={styles.scrollView}>
          <Text style={styles.titleText}>Ticker Title:</Text>
          <TextInput
          style={styles.input}
          placeholder="Type your ticker title here"
          placeholderTextColor="cadetblue"
          keyboardType="numeric"
            focusable={true}
            onChangeText={(text) => {this.setState({title: text})}}
          />
          <Text style={styles.titleText}>Ticker Description:</Text>
          <TextInput
          style={styles.input}
          placeholder="Type description here (230 char max)"
          placeholderTextColor="cadetblue"
          keyboardType="numeric"
          focusable={true}
          />
      {/* <Text>selected: {date.toLocaleString()}</Text> */}
        <Text style={styles.titleText}>Deadline:</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value= {chosenDate}
          mode="datetime"
          is24Hour={true}
          display= "spinner"
          onDateChange={setChosenDate}
          textColor="cadetblue"
        />
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {this.submit()}}
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
  
export default TickerForm