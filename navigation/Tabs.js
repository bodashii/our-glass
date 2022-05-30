import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

import Dash from '../src/components/Dash';
import Account from '../src/components/Account';
import TickerForm from '../src/components/TickerForm';


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
        <Tab.Screen style={styles.shadow} name="Dash" component={Dash} />
        <Tab.Screen name="Create" component={TickerForm} />
        <Tab.Screen name="Account" component={Account} />
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