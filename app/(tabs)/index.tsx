import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createHomeStyles } from "@/assets/styles/home.style.";
import AddTodo from "@/components/AddTodo";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoCard from "@/components/TodoCard";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/useTheme";

type Todo = Doc<"todos">;

// rnfe
export default function Index() {
  const { colors } = useTheme();
  const style = createHomeStyles(colors);

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
      style={style.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={style.safeArea}>
        <Header
          subtitle={`${completedCount} of ${totalCount} Complete`}
          title="Today's Tasks"
          titleIcon="flash-outline"
        >
          <View style={style.progressContainer}>
            <View style={style.progressBarContainer}>
              <View style={style.progressBar}>
                <LinearGradient
                  colors={colors.gradients.success}
                  style={[
                    style.progressFill,
                    { width: `${completedPercentage}%` },
                  ]}
                />
              </View>
              <Text style={style.progressText}>
                {Math.round(completedPercentage)} %
              </Text>
            </View>
          </View>
        </Header>
        <AddTodo />
        <FlatList
          contentContainerStyle={style.todoListContent}
          data={todos}
          keyExtractor={(item) => item._id}
          ListEmptyComponent={
            <EmptyState
              icon="clipboard-outline"
              subtitle="Add your first todo above to get started"
              title="No todos yet!"
            />
          }
          renderItem={({ item }: { item: Todo }) => <TodoCard item={item} />}
          style={style.todoList}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
