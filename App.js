import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from "./components/Header";
import { uuid } from "uuidv4";

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: "milk" },
    { id: uuid(), text: "bread" },
    { id: uuid(), text: "butter" },
    { id: uuid(), text: "apple" },
  ]);

  return (
    <View style={styles.container}>
      <Header title="Shopping list" />
      <FlatList
        data={items}
        renderItem={({ item }) => <Text>{item.text}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default App;
