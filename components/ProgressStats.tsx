import { ComponentProps, useMemo } from "react";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

import { createGlobalStyles } from "@/assets/styles/global.styles";
import { radii, spacing, typography } from "@/constant/designToken";
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

  const globalStyles = useMemo(() => createGlobalStyles(colors), [colors]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        statsContainer: {
          gap: spacing.md,
        },
        statCard: {
          flexDirection: "row",
          alignItems: "center",
          padding: spacing.base,
          borderRadius: radii.lg,
          borderLeftWidth: 4,
          borderWidth: 1,
          borderColor: colors.borderSubtle,
        },
        statIconContainer: {
          marginRight: spacing.base,
        },
        statIcon: {
          width: 40,
          height: 40,
          borderRadius: radii.full,
          justifyContent: "center",
          alignItems: "center",
        },
        statNumber: {
          fontSize: typography.metricLarge.fontSize,
          fontWeight: typography.metricLarge.fontWeight,
          lineHeight: typography.metricLarge.lineHeight,
          letterSpacing: typography.metricLarge.letterSpacing,
          color: colors.text,
        },
        statLabel: {
          fontSize: typography.bodyMuted.fontSize,
          fontWeight: typography.bodyMuted.fontWeight,
          lineHeight: typography.bodyMuted.lineHeight,
          marginTop: spacing["2xs"],
          color: colors.textSecondary,
        },
      }),
    [colors.borderSubtle, colors.text, colors.textSecondary],
  );

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
      icon: "layers-outline",
      value: totalTodos,
    },
    {
      key: "completed",
      color: "success",
      title: "Completed",
      icon: "checkmark-circle-outline",
      value: completedTodos,
    },
    {
      key: "active",
      color: "warning",
      title: "Active",
      icon: "time-outline",
      value: activeTodos,
    },
  ];

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={globalStyles.section}
    >
      <Text style={globalStyles.sectionTitle}>Progress Stats</Text>

      <View style={styles.statsContainer}>
        {items.map((item) => (
          <LinearGradient
            key={item.key}
            colors={colors.gradients.background}
            style={[styles.statCard, { borderLeftColor: colors[item.color] }]}
          >
            <View style={styles.statIconContainer}>
              <LinearGradient
                colors={colors.gradients[item.color]}
                style={styles.statIcon}
              >
                <Ionicons color="#fff" name={item.icon} size={20} />
              </LinearGradient>
            </View>

            <View>
              <Text style={styles.statNumber}>{item.value}</Text>
              <Text style={styles.statLabel}>{item.title}</Text>
            </View>
          </LinearGradient>
        ))}
      </View>
    </LinearGradient>
  );
};

export default ProgressStats;
