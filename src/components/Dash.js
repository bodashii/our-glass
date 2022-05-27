import React from "react";
import { Text, View } from "react-native";

export default function Dash() {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>ourGlass</Text>
      <Text> developed by: Antony, Brandon, Mark, Nicolas, Vivianna</Text>
    </View>
  );
}
