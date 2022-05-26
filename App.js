import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import Dash from "./src/components/Dash"

/* add function to check JWT and direct to login/signup 
if authorized load dash */

export default function App() {
  return <Dash />
}

// function Router() {
//   const isUserSignedIn = () => false;

//   return (
//     isUserSignedIn() ?
//       <Text>Congrats! You're signed in.</Text>
//       :
//       <Dash />
//   )
// }
