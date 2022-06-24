import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#b6afaf",
    padding: 15,
  },
  headerTitle: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 25,
    color: "#5c0303",
    fontWeight: "bold",
  },
});
