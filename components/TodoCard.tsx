import { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { createHomeStyles } from "@/assets/styles/home.style.";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/useTheme";

import { Ionicons } from "@expo/vector-icons";

type Todo = Doc<"todos">;

const TodoCard = ({ item }: { item: Todo }) => {
  const { colors } = useTheme();
  const style = createHomeStyles(colors);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(item.text);

  useEffect(() => {
    return () => {
      setEditText(item.text);
    };
  }, [item]);

  const toggleTodoIsComplete = useMutation(api.todos.ToggleTodoIsComplete);
  const updateTodo = useMutation(api.todos.updateTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);

  async function handleToggleComplete() {
    setIsLoading(true);
    try {
      await toggleTodoIsComplete({ id: item._id });
    } catch (error) {
      Alert.alert(
        "Error",
        `Failed to ${item.isCompleted ? "mark task as active" : "complete task"}: ` +
          error,
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSaveEdit() {
    setIsLoading(true);
    const trimmedValue = editText.trim();
    if (trimmedValue === item.text) {
      setIsEditing(false);
      setIsLoading(false);
      return;
    }
    try {
      await updateTodo({ id: item._id, text: trimmedValue });
      setIsEditing(false);
    } catch (error) {
      Alert.alert("Error", `Failed to update "${item.text}": \n` + error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete() {
    setIsLoading(true);
    try {
      await deleteTodo({ id: item._id });
    } catch (error) {
      Alert.alert("Error", `Failed to delete "${item.text}": \n` + error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleDeleteConfirmationAlert() {
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => handleDelete(),
      },
    ]);
  }

  return (
    <View style={style.todoItemWrapper}>
      <LinearGradient
        colors={colors.gradients.surface}
        end={{ x: 1, y: 1 }}
        start={{ x: 0, y: 0 }}
        style={style.todoItem}
      >
        {/* checkbox */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.checkbox}
          onPress={handleToggleComplete}
        >
          {item.isCompleted ? (
            <LinearGradient
              colors={
                item.isCompleted
                  ? colors.gradients.success
                  : colors.gradients.muted
              }
              style={[
                style.checkboxInner,
                {
                  borderColor: item.isCompleted ? "transparent" : colors.border,
                },
              ]}
            >
              {item.isCompleted && (
                <Ionicons color="#fff" name="checkmark" size={14} />
              )}
            </LinearGradient>
          ) : (
            <View
              style={[style.checkboxInner, { borderColor: colors.border }]}
            />
          )}
        </TouchableOpacity>

        {isEditing ? (
          <View style={style.editContainer}>
            <TextInput
              autoFocus
              placeholder="Edit your task..."
              placeholderTextColor={colors.textSecondary}
              style={style.editInput}
              value={editText}
              onChangeText={setEditText}
            />
            <View style={style.editButtons}>
              <TouchableOpacity activeOpacity={0.8} onPress={handleSaveEdit}>
                <LinearGradient
                  colors={colors.gradients.primary}
                  style={style.editButton}
                >
                  <Ionicons color="#fff" name="checkmark" size={14} />
                  <Text style={style.editButtonText}>Save</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setIsEditing(false);
                  setEditText(item.text);
                }}
              >
                <LinearGradient
                  colors={colors.gradients.muted}
                  style={style.editButton}
                >
                  <Ionicons color="#fff" name="close" size={14} />
                  <Text style={style.editButtonText}>Cancel</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={style.todoTextContainer}>
            <Text
              style={[
                style.todoText,
                item.isCompleted && style.todoTextCompleted,
              ]}
            >
              {item.text}
              {isLoading && (
                <ActivityIndicator color={colors.primary} size="small" />
              )}
            </Text>
          </View>
        )}

        {!isEditing && (
          <View style={style.todoActions}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setIsEditing(true)}
            >
              <LinearGradient
                colors={colors.gradients.warning}
                style={style.actionButton}
              >
                <Ionicons color="#fff" name="pencil" size={14} />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleDeleteConfirmationAlert}
            >
              <LinearGradient
                colors={colors.gradients.danger}
                style={style.actionButton}
              >
                <Ionicons color="#fff" name="trash" size={14} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

export default TodoCard;
