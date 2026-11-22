import { ComponentProps } from "react";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

import { createSettingsStyles } from "@/assets/styles/settings.style";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";

import { Ionicons } from "@expo/vector-icons";

interface ProgressItem {
  key: string;
  color: "primary" | "success" | "warning";
  title: string;
  icon: ComponentProps<typeof Ionicons>["name"];
  value: number;
}

const ProgressStats = () => {
  const { colors } = useTheme();
  const settingsStyles = createSettingsStyles(colors);

  const todos = useQuery(api.todos.getTodos);
  const totalTodos: number = todos ? todos.length : 0;
  const completedTodos: number = todos
    ? todos.filter((todo) => todo.isCompleted).length
    : 0;
  const activeTodos: number = totalTodos - completedTodos;

  const items: ProgressItem[] = [
    {
      key: "total",
      color: "primary",
      title: "Total Todos",
      icon: "list",
      value: totalTodos,
    },
    {
      key: "completed",
      color: "success",
      title: "Completed",
      icon: "checkmark-circle",
      value: completedTodos,
    },
    {
      key: "active",
      color: "warning",
      title: "Active",
      icon: "time",
      value: activeTodos,
    },
  ];

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyles.section}
    >
      <Text style={settingsStyles.sectionTitle}>Progress Stats</Text>

      <View style={settingsStyles.statsContainer}>
        {items.map((item) => (
          <LinearGradient
            key={item.key}
            colors={colors.gradients.background}
            style={[
              settingsStyles.statCard,
              { borderLeftColor: colors[item.color] },
            ]}
          >
            <View style={settingsStyles.statIconContainer}>
              <LinearGradient
                colors={colors.gradients[item.color]}
                style={settingsStyles.statIcon}
              >
                <Ionicons color="#fff" name={item.icon} size={20} />
              </LinearGradient>
            </View>

            <View>
              <Text style={settingsStyles.statNumber}>{item.value}</Text>
              <Text style={settingsStyles.statLabel}>{item.title}</Text>
            </View>
          </LinearGradient>
        ))}
      </View>
    </LinearGradient>
  );
};

export default ProgressStats;
