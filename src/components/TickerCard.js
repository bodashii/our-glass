import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';
import Countdown from './Countdown'

const TickerCard = (props) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Card style={styles.card}>
            <Text style={styles.title}>
              Timer Title will go here with the timer under it
            </Text>
            <Countdown 
            timeTillDate="05 26 2019, 6:00 am" 
            timeFormat="MM DD YYYY, h:mm a" 
            />
          </Card>
        </View>
      </SafeAreaView>
    );
  };

  export default TickerCard;

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#C5E063',
        },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: 20,
        color: "white"
        },
    card: {
        backgroundColor: "#5F9EA0"
    }
  })

  