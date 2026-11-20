import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, StatusBar } from "react-native";
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
        <Header />
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
