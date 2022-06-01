import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

import Dash from '../src/components/Dash';
import Account from '../src/components/Account';
import TickerForm from '../src/components/TickerForm';
import LogIn from '../src/components/Login.js';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 20,
                    left: 15,
                    right: 15,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    height: 100,
                }
            }}>
        <Tab.Screen style={styles.shadow} name="OurGlass Dash" component={Dash} />
        <Tab.Screen name="OurGlass Create" component={TickerForm} />
        <Tab.Screen name="OurGlass Account" component={Account} />
        <Tab.Screen name="OurGlass Login" component={LogIn} />
      </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 3
    }
})
export default Tabs;