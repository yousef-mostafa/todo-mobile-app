import { useMemo } from "react";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createGlobalStyles } from "@/assets/styles/global.styles";
import AddTodo from "@/components/AddTodo";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoCard from "@/components/TodoCard";
import { radii, spacing } from "@/constant/designToken";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/useTheme";

type Todo = Doc<"todos">;

export default function Index() {
  const { colors } = useTheme();

  const globalStyles = useMemo(() => createGlobalStyles(colors), [colors]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        progressContainer: {
          marginTop: spacing.xs,
        },
        progressBarContainer: {
          flexDirection: "row",
          alignItems: "center",
          gap: spacing.base,
        },
        progressBar: {
          flex: 1,
          height: 8,
          borderRadius: radii.full,
          overflow: "hidden",
          backgroundColor: colors.border,
        },
        progressFill: {
          height: "100%",
          borderRadius: radii.full,
        },
        progressText: {
          fontSize: 13,
          fontWeight: "700",
          minWidth: 40,
          textAlign: "right",
          color: colors.success,
        },
        todoList: {
          flex: 1,
        },
        todoListContent: {
          paddingHorizontal: spacing.gutter,
          paddingBottom: 100,
        },
      }),
    [colors.border, colors.success],
  );

  const todos: Todo[] | undefined = useQuery(api.todos.getTodos);
  const isLoading = todos === undefined;

  const completedCount = todos
    ? todos.filter((todo) => todo.isCompleted).length
    : 0;

  const totalCount = todos ? todos.length : 0;
  const completedPercentage =
    totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  if (isLoading)
    return (
      <LoadingSpinner
        showMessage
        message="Loading your todos..."
        size="large"
      />
    );

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={globalStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={globalStyles.safeArea}>
        <Header
          subtitle={`${completedCount} of ${totalCount} Complete`}
          title="Today's Tasks"
          titleIcon="bolt"
        >
          <View style={styles.progressContainer}>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBar}>
                <LinearGradient
                  colors={colors.gradients.success}
                  style={[
                    styles.progressFill,
                    { width: `${completedPercentage}%` },
                  ]}
                />
              </View>
              <Text style={styles.progressText}>
                {Math.round(completedPercentage)} %
              </Text>
            </View>
          </View>
        </Header>
        <AddTodo />
        <FlatList
          contentContainerStyle={styles.todoListContent}
          data={todos}
          keyExtractor={(item) => item._id}
          ListEmptyComponent={
            <EmptyState
              icon="clipboard"
              subtitle="Add your first todo above to get started"
              title="No todos yet!"
            />
          }
          renderItem={({ item }: { item: Todo }) => <TodoCard item={item} />}
          style={styles.todoList}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
