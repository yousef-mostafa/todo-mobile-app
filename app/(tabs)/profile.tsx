import { useMemo } from "react";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createGlobalStyles } from "@/assets/styles/global.styles";
import Header from "@/components/Header";
import { radii, spacing, typography } from "@/constant/designToken";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const ProfileTab = () => {
  const { colors, isDarkMode } = useTheme();

  const globalStyles = useMemo(() => createGlobalStyles(colors), [colors]);

  const todos = useQuery(api.todos.getTodos);
  const totalTodos = todos ? todos.length : 0;
  const completedTodos = todos
    ? todos.filter((todo) => todo.isCompleted).length
    : 0;
  const completionRate =
    totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;

  const styles = useMemo(
    () =>
      StyleSheet.create({
        content: {
          paddingHorizontal: spacing.gutter,
          gap: spacing.base,
          paddingBottom: 120,
        },
        heroCard: {
          borderRadius: radii.xl,
          borderWidth: 1,
          borderColor: colors.border,
          padding: spacing.xl,
          alignItems: "center",
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.08,
          shadowRadius: 10,
          elevation: 4,
        },
        avatarWrapper: {
          width: 72,
          height: 72,
          borderRadius: 36,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: spacing.md,
          shadowColor: colors.primary,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 8,
          elevation: 6,
        },
        userName: {
          fontSize: typography.sectionTitle.fontSize,
          fontWeight: typography.sectionTitle.fontWeight,
          lineHeight: typography.sectionTitle.lineHeight,
          color: colors.text,
          marginBottom: spacing["2xs"],
        },
        userEmail: {
          fontSize: typography.bodyMuted.fontSize,
          fontWeight: typography.bodyMuted.fontWeight,
          color: colors.textSecondary,
          marginBottom: spacing.md,
        },
        badgePill: {
          flexDirection: "row",
          alignItems: "center",
          gap: spacing.xs,
          backgroundColor: colors.primaryContainer,
          paddingHorizontal: spacing.md,
          paddingVertical: spacing.xs,
          borderRadius: radii.full,
          borderWidth: 1,
          borderColor: colors.borderActive,
        },
        badgeText: {
          fontSize: 12,
          fontWeight: "700",
          color: colors.primary,
        },
        statsSection: {
          borderRadius: radii.xl,
          borderWidth: 1,
          borderColor: colors.border,
          padding: spacing.lg,
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.08,
          shadowRadius: 10,
          elevation: 4,
        },
        sectionTitle: {
          fontSize: typography.sectionTitle.fontSize,
          fontWeight: typography.sectionTitle.fontWeight,
          lineHeight: typography.sectionTitle.lineHeight,
          letterSpacing: typography.sectionTitle.letterSpacing,
          marginBottom: spacing.base,
          color: colors.text,
        },
        statsGrid: {
          flexDirection: "row",
          gap: spacing.md,
        },
        metricBox: {
          flex: 1,
          borderRadius: radii.lg,
          borderWidth: 1,
          borderColor: colors.borderSubtle,
          padding: spacing.md,
          alignItems: "center",
        },
        metricValue: {
          fontSize: typography.metricLarge.fontSize,
          fontWeight: typography.metricLarge.fontWeight,
          lineHeight: typography.metricLarge.lineHeight,
          letterSpacing: typography.metricLarge.letterSpacing,
          color: colors.text,
          marginBottom: spacing["2xs"],
        },
        metricLabel: {
          fontSize: 12,
          fontWeight: "500",
          color: colors.textSecondary,
          textAlign: "center",
        },
        infoSection: {
          borderRadius: radii.xl,
          borderWidth: 1,
          borderColor: colors.border,
          padding: spacing.lg,
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.08,
          shadowRadius: 10,
          elevation: 4,
        },
        infoRow: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: spacing.md,
          borderBottomWidth: 1,
          borderBottomColor: colors.borderSubtle,
        },
        infoLabel: {
          fontSize: typography.bodyDefault.fontSize,
          fontWeight: "500",
          color: colors.textSecondary,
        },
        infoValue: {
          fontSize: typography.bodyDefault.fontSize,
          fontWeight: "600",
          color: colors.text,
        },
      }),
    [
      colors.border,
      colors.shadow,
      colors.primary,
      colors.text,
      colors.textSecondary,
      colors.primaryContainer,
      colors.borderActive,
      colors.borderSubtle,
    ],
  );

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={globalStyles.container}
    >
      <SafeAreaView style={globalStyles.safeArea}>
        <Header title="Profile" titleIcon="user" />

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* User Hero Card */}
          <LinearGradient
            colors={colors.gradients.surface}
            style={styles.heroCard}
          >
            <LinearGradient
              colors={colors.gradients.primary}
              style={styles.avatarWrapper}
            >
              <FontAwesome6 color="#ffffff" name="user" size={36} />
            </LinearGradient>

            <Text style={styles.userName}>Productivity Pro</Text>
            <Text style={styles.userEmail}>user@taskflow.dev</Text>

            <View style={styles.badgePill}>
              <FontAwesome6
                color={colors.primary}
                name="shield-halved"
                size={14}
              />
              <Text style={styles.badgeText}>Verified Task Master</Text>
            </View>
          </LinearGradient>

          {/* Productivity Overview */}
          <LinearGradient
            colors={colors.gradients.surface}
            style={styles.statsSection}
          >
            <Text style={styles.sectionTitle}>Productivity Highlights</Text>
            <View style={styles.statsGrid}>
              <LinearGradient
                colors={colors.gradients.background}
                style={styles.metricBox}
              >
                <Text style={styles.metricValue}>{totalTodos}</Text>
                <Text style={styles.metricLabel}>Total Tasks</Text>
              </LinearGradient>

              <LinearGradient
                colors={colors.gradients.background}
                style={styles.metricBox}
              >
                <Text style={[styles.metricValue, { color: colors.success }]}>
                  {completionRate}%
                </Text>
                <Text style={styles.metricLabel}>Completion</Text>
              </LinearGradient>

              <LinearGradient
                colors={colors.gradients.background}
                style={styles.metricBox}
              >
                <Text style={[styles.metricValue, { color: colors.warning }]}>
                  {completedTodos}
                </Text>
                <Text style={styles.metricLabel}>Resolved</Text>
              </LinearGradient>
            </View>
          </LinearGradient>

          {/* App & System Details */}
          <LinearGradient
            colors={colors.gradients.surface}
            style={styles.infoSection}
          >
            <Text style={styles.sectionTitle}>System & Design</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Design System</Text>
              <Text style={styles.infoValue}>Modern Task Flow v2.0</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Theme Mode</Text>
              <Text style={styles.infoValue}>
                {isDarkMode ? "Dark Theme" : "Light Theme"}
              </Text>
            </View>
            <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
              <Text style={styles.infoLabel}>Primary Accent</Text>
              <Text style={[styles.infoValue, { color: colors.primary }]}>
                Emerald Green (#10b981)
              </Text>
            </View>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ProfileTab;
