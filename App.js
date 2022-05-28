import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dash from './src/components/Dash';
import Account from './src/components/Account';


// import * as ImagePicker from 'expo-image-picker';
// import * as Sharing from 'expo-sharing';
// import { Platform } from 'expo-modules-core';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dash">
        <Stack.Screen name="Dash" component={Dash} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;