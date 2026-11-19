import { useState } from "react";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, Pressable, TextInput, View } from "react-native";

import { createHomeStyles } from "@/assets/styles/home.style.";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";

import { Ionicons } from "@expo/vector-icons";

const AddTodo = () => {
  const { colors } = useTheme();
  const style = createHomeStyles(colors);

  const [todoTitle, setTodoTitle] = useState<string>("");
  const trimmedValue = todoTitle.trim();
  const addTodo = useMutation(api.todos.addTodo);

  async function handleSubmitTodo() {
    if (!trimmedValue) return;
    try {
      await addTodo({ text: todoTitle });
      setTodoTitle("");
    } catch (error) {
      Alert.alert("Error", "Failed to add todo: " + error);
    }
  }

  return (
    <View style={style.inputSection}>
      <View style={style.inputWrapper}>
        <TextInput
          placeholder="What needs to be done?"
          placeholderTextColor={colors.textMuted}
          style={style.input}
          value={todoTitle}
          onChangeText={setTodoTitle}
        />
        <Pressable disabled={!trimmedValue} onPress={handleSubmitTodo}>
          <LinearGradient
            colors={
              trimmedValue ? colors.gradients.primary : colors.gradients.muted
            }
            style={[style.addButton, !trimmedValue && style.addButtonDisabled]}
          >
            <Ionicons color={"#fff"} name="add" size={28} />
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
};

export default AddTodo;
