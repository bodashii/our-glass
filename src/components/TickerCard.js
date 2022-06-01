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
              TIMER TITLE WILL GO HERE
            </Text>
            <Countdown 
            timeTillDate="05 26 2019, 6:00 am" 
            timeFormat="MM DD YYYY, h:mm a" 
            />
            <Text style={styles.username}>
              Username
            </Text>
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
        textAlign: 'center',
        paddingTop: 20,
        marginBottom: 10,
        color: "white"
        },
    card: {
        backgroundColor: "#5F9EA0",
        shadowRadius: 5
    },
    username: {
        fontSize: 10,
        textAlign: 'left',
        padding: 15,
        color: "white"
    }
  })

  