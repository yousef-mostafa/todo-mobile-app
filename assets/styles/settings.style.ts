import { StyleSheet } from "react-native";

import {
  ColorScheme,
  radii,
  spacing,
  typography,
} from "@/constant/designToken";

export const createSettingsStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    header: {
      paddingHorizontal: spacing.gutter,
      paddingVertical: spacing.xl,
      paddingBottom: spacing.base,
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: radii.md,
      justifyContent: "center",
      alignItems: "center",
      marginRight: spacing.base,
    },
    title: {
      fontSize: typography.titleApp.fontSize,
      fontWeight: typography.titleApp.fontWeight,
      lineHeight: typography.titleApp.lineHeight,
      letterSpacing: typography.titleApp.letterSpacing,
      color: colors.text,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      paddingHorizontal: spacing.gutter,
      gap: spacing.base,
      paddingBottom: 120,
    },
    section: {
      borderRadius: radii.xl,
      padding: spacing.lg,
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
    sectionTitle: {
      fontSize: typography.sectionTitle.fontSize,
      fontWeight: typography.sectionTitle.fontWeight,
      lineHeight: typography.sectionTitle.lineHeight,
      letterSpacing: typography.sectionTitle.letterSpacing,
      marginBottom: spacing.base,
      color: colors.text,
    },
    sectionTitleDanger: {
      fontSize: typography.sectionTitle.fontSize,
      fontWeight: typography.sectionTitle.fontWeight,
      lineHeight: typography.sectionTitle.lineHeight,
      letterSpacing: typography.sectionTitle.letterSpacing,
      marginBottom: spacing.base,
      color: colors.danger,
    },
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
    settingItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: spacing.base,
      borderBottomWidth: 1,
      borderBottomColor: colors.borderSubtle,
    },
    settingLeft: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
    settingIcon: {
      width: 36,
      height: 36,
      borderRadius: radii.sm,
      justifyContent: "center",
      alignItems: "center",
      marginRight: spacing.base,
    },
    settingText: {
      fontSize: typography.bodyDefault.fontSize,
      fontWeight: "600",
      color: colors.text,
    },
    actionButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: spacing.base,
      borderBottomWidth: 1,
      borderBottomColor: colors.borderSubtle,
    },
    actionLeft: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
    actionIcon: {
      width: 36,
      height: 36,
      borderRadius: radii.sm,
      justifyContent: "center",
      alignItems: "center",
      marginRight: spacing.base,
    },
    actionText: {
      fontSize: typography.bodyDefault.fontSize,
      fontWeight: "600",
      color: colors.text,
    },
    actionTextDanger: {
      fontSize: typography.bodyDefault.fontSize,
      fontWeight: "600",
      color: colors.danger,
    },
  });

  return styles;
};
