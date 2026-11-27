import { useEffect, useMemo, useState } from "react";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { radii, spacing, typography } from "@/constant/designToken";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/useTheme";

import { Ionicons } from "@expo/vector-icons";

type Todo = Doc<"todos">;

const TodoCard = ({ item }: { item: Todo }) => {
  const { colors } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        todoItemWrapper: {
          marginVertical: spacing.xs,
        },
        todoItem: {
          flexDirection: "row",
          alignItems: "center",
          padding: spacing.base,
          borderRadius: radii.xl,
          borderWidth: 1,
          borderColor: colors.border,
          shadowColor: colors.shadow,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.08,
          shadowRadius: 10,
          elevation: 4,
        },
        checkbox: {
          marginRight: spacing.md,
        },
        checkboxInner: {
          width: 24,
          height: 24,
          borderRadius: radii.full,
          borderWidth: 2,
          justifyContent: "center",
          alignItems: "center",
        },
        todoTextContainer: {
          flex: 1,
        },
        todoText: {
          fontSize: typography.bodyDefault.fontSize,
          lineHeight: typography.bodyDefault.lineHeight,
          fontWeight: typography.bodyDefault.fontWeight,
          color: colors.text,
          alignItems: "center",
        },
        todoTextCompleted: {
          textDecorationLine: "line-through",
          color: colors.textSecondary,
          opacity: 0.5,
        },
        todoActions: {
          flexDirection: "row",
          alignItems: "center",
          gap: spacing.sm,
          marginLeft: spacing.sm,
        },
        actionButton: {
          width: 36,
          height: 36,
          borderRadius: radii.full,
          justifyContent: "center",
          alignItems: "center",
        },
        editContainer: {
          flex: 1,
        },
        editInput: {
          borderWidth: 2,
          borderRadius: radii.full,
          paddingHorizontal: spacing.base,
          paddingVertical: spacing.sm,
          fontSize: typography.bodyDefault.fontSize,
          fontWeight: typography.bodyDefault.fontWeight,
          marginBottom: spacing.sm,
          backgroundColor: colors.backgrounds.editInput,
          borderColor: colors.primary,
          color: colors.text,
        },
        editButtons: {
          flexDirection: "row",
          gap: spacing.sm,
        },
        editButton: {
          flexDirection: "row",
          alignItems: "center",
          gap: spacing.xs,
          paddingHorizontal: spacing.base,
          paddingVertical: spacing.xs,
          borderRadius: radii.full,
        },
        editButtonText: {
          color: "#ffffff",
          fontSize: 13,
          fontWeight: typography.buttonText.fontWeight,
        },
      }),
    [
      colors.border,
      colors.shadow,
      colors.text,
      colors.textSecondary,
      colors.backgrounds.editInput,
      colors.primary,
    ],
  );

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
    <View style={styles.todoItemWrapper}>
      <LinearGradient
        colors={colors.gradients.surface}
        end={{ x: 1, y: 1 }}
        start={{ x: 0, y: 0 }}
        style={styles.todoItem}
      >
        {/* checkbox */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.checkbox}
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
                styles.checkboxInner,
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
              style={[styles.checkboxInner, { borderColor: colors.border }]}
            />
          )}
        </TouchableOpacity>

        {isEditing ? (
          <View style={styles.editContainer}>
            <TextInput
              autoFocus
              placeholder="Edit your task..."
              placeholderTextColor={colors.textSecondary}
              style={styles.editInput}
              value={editText}
              onChangeText={setEditText}
            />
            <View style={styles.editButtons}>
              <TouchableOpacity activeOpacity={0.8} onPress={handleSaveEdit}>
                <LinearGradient
                  colors={colors.gradients.primary}
                  style={styles.editButton}
                >
                  <Ionicons color="#fff" name="checkmark" size={14} />
                  <Text style={styles.editButtonText}>Save</Text>
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
                  style={styles.editButton}
                >
                  <Ionicons color="#fff" name="close" size={14} />
                  <Text style={styles.editButtonText}>Cancel</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.todoTextContainer}>
            <Text
              style={[
                styles.todoText,
                item.isCompleted && styles.todoTextCompleted,
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
          <View style={styles.todoActions}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setIsEditing(true)}
            >
              <LinearGradient
                colors={colors.gradients.warning}
                style={styles.actionButton}
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
                style={styles.actionButton}
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
