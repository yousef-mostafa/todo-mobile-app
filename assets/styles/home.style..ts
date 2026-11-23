import { StyleSheet } from "react-native";

import {
  ColorScheme,
  radii,
  spacing,
  typography,
} from "@/constant/designToken";

export const createHomeStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    loadingText: {
      marginTop: spacing.lg,
      fontSize: 16,
      fontWeight: "500",
      color: colors.text,
    },
    header: {
      paddingHorizontal: spacing.gutter,
      paddingVertical: spacing.xl,
      paddingBottom: spacing.base,
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: spacing.base,
    },
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: radii.md,
      justifyContent: "center",
      alignItems: "center",
      marginRight: spacing.base,
    },
    titleTextContainer: {
      flex: 1,
    },
    title: {
      fontSize: typography.titleApp.fontSize,
      fontWeight: typography.titleApp.fontWeight,
      lineHeight: typography.titleApp.lineHeight,
      letterSpacing: typography.titleApp.letterSpacing,
      marginBottom: spacing["2xs"],
      color: colors.text,
    },
    subtitle: {
      fontSize: typography.bodyMuted.fontSize,
      fontWeight: typography.bodyMuted.fontWeight,
      lineHeight: typography.bodyMuted.lineHeight,
      color: colors.textSecondary,
    },
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
    inputSection: {
      paddingHorizontal: spacing.gutter,
      paddingBottom: spacing.md,
    },
    inputWrapper: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
    },
    input: {
      flex: 1,
      height: 52,
      borderWidth: 1.5,
      borderRadius: radii.full,
      paddingHorizontal: spacing.lg,
      fontSize: typography.bodyDefault.fontSize,
      fontWeight: typography.bodyDefault.fontWeight,
      backgroundColor: colors.backgrounds.input,
      borderColor: colors.border,
      color: colors.text,
    },
    inputFocused: {
      borderColor: colors.borderActive,
      borderWidth: 2,
    },
    micButton: {
      width: 44,
      height: 44,
      borderRadius: radii.full,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.primaryContainer,
      borderWidth: 1,
      borderColor: colors.borderSubtle,
    },
    addButton: {
      width: 52,
      height: 52,
      borderRadius: radii.full,
      justifyContent: "center",
      alignItems: "center",
    },
    addButtonDisabled: {
      opacity: 0.5,
    },
    todoList: {
      flex: 1,
    },
    todoListContent: {
      paddingHorizontal: spacing.gutter,
      paddingBottom: 100,
    },
    emptyListContainer: {
      flexGrow: 1,
      justifyContent: "center",
    },
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
    emptyContainer: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 64,
    },
    emptyIconContainer: {
      width: 96,
      height: 96,
      borderRadius: 48,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: spacing.lg,
    },
    emptyText: {
      fontSize: typography.sectionTitle.fontSize,
      fontWeight: typography.sectionTitle.fontWeight,
      lineHeight: typography.sectionTitle.lineHeight,
      marginBottom: spacing.xs,
      color: colors.text,
    },
    emptySubtext: {
      fontSize: typography.bodyMuted.fontSize,
      lineHeight: typography.bodyMuted.lineHeight,
      textAlign: "center",
      paddingHorizontal: spacing["2xl"],
      color: colors.textSecondary,
    },
  });

  return styles;
};
