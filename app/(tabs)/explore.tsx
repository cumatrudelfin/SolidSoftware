import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
};

const compliments = [
  "I love",
  "I like",
  "You're amazing",
  "Fantastic work",
  "Keep it up",
  "Well done",
];

export default function TabTwoScreen() {
  const companyName = " Solid Softwar";
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [compliment, setCompliment] = useState(compliments[0] + companyName);

  const handlePress = () => {
    setBgColor(getRandomColor());
    setTextColor(getRandomColor());
    setCompliment(
      compliments[Math.floor(Math.random() * compliments.length)] + companyName
    );
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.wrap, { backgroundColor: bgColor }]}
    >
      <Text style={[styles.text, { color: textColor }]}>{compliment}</Text>
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
    fontSize: 24,
    fontWeight: "bold",
  },
});
