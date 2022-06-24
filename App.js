import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native-web";
import Header from "./src/components/Header";

export default function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoLst, setTodoLst] = useState([]);

  const textHandler = (e) => {
    setTodoItem(e);
    console.log(todoItem);
  };

  const addTodoList = () => {
    setTodoLst([...todoLst, todoItem]);
    setTodoItem("");
  };
  console.log(todoLst);

  const disableButton = todoItem.length === 0;

  return (
    <View>
      <Header title="Todo App" />
      <View style={styles.container}>
        <View style={{ fontWeight: "Bold" }}>Write Your Todos</View>
        <View>
          <TextInput
            placeholder="enter a todo"
            style={styles.textInput}
            onChangeText={textHandler}
            value={todoItem}
          />

          <Button
            disabled={disableButton}
            title="Add todo"
            onPress={addTodoList}
          />
        </View>
        <ScrollView>
          {todoLst.map((element, i) => {
            return (
              <View style={styles.todo}>
                {" "}
                <Text key={i}>{element}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  textInput: {
    padding: 10,
    borderColor: "black",
    marginBottom: 10,
    borderWidth: 1,
  },
  todo: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "yellow",
    color: "white",
    margin: 10,
  },
});
