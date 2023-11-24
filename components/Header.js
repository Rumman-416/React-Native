import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.txt}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 45,
    height: 60,
    padding: 15,
    backgroundColor: "blue",
    alignItems: "center",
  },
  txt: {
    fontSize: 25,
    color: "white",
  },
});

export default Header;
