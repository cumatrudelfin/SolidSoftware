import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const getRandomColor = () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
};

export default function HomeScreen() {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");

  const handlePress = () => {
    setBgColor(getRandomColor());
    setTextColor(getRandomColor());
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.wrap, { backgroundColor: bgColor }]}
    >
      <Text style={[styles.text, { color: textColor }]}>Hello there</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    
  },
});
