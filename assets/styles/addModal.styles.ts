import { StyleSheet } from "react-native";

import {
  ColorScheme,
  radii,
  spacing,
  typography,
} from "@/constant/designToken";

export const createAddModalStyles = (colors: ColorScheme) => {
  return StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "flex-end",
    },
    sheetContainer: {
      backgroundColor: colors.modal,
      borderTopLeftRadius: radii.sheet,
      borderTopRightRadius: radii.sheet,
      borderTopWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: spacing.gutter,
      paddingTop: spacing.base,
      paddingBottom: spacing["2xl"],
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: -6 },
      shadowOpacity: 0.15,
      shadowRadius: 16,
      elevation: 12,
    },
    handleBar: {
      width: 40,
      height: 4,
      borderRadius: radii.full,
      backgroundColor: colors.border,
      marginBottom: spacing.base,
    },
    // header
    headerRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: spacing.base,
    },
    title: {
      ...typography.sectionTitle,
      color: colors.text,
    },
    subtitle: {
      ...typography.bodyMuted,
      color: colors.textSecondary,
    },
    closeButton: {
      padding: 8,
      borderRadius: radii.full,
      justifyContent: "center",
      alignItems: "center",
    },
    // speech section
    speechContainer: {
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: radii.lg,
      paddingVertical: spacing.md,
    },
    timerPill: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      backgroundColor: colors.primaryContainer,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
      borderRadius: radii.full,
      borderWidth: 1,
      borderColor: colors.borderActive,
    },
    timerDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
    },
    timerText: {
      fontSize: 12,
      fontWeight: "700",
      color: colors.primary,
    },
    waveformRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      height: 40,
      marginVertical: spacing.md,
    },
    waveformBar: {
      width: 3.5,
      borderRadius: 2,
      backgroundColor: colors.primary,
    },
    // mic
    micButtonWrapper: {
      alignItems: "center",
      justifyContent: "center",
      marginVertical: spacing.base,
    },
    micPulseRing: {
      position: "absolute",
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: colors.primaryContainer,
    },
    micButton: {
      width: 64,
      height: 64,
      borderRadius: 32,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.35,
      shadowRadius: 10,
      elevation: 6,
    },
    // transcript
    previewCard: {
      width: "100%",
      borderRadius: radii.lg,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.backgrounds.input,
      padding: spacing.base,
      marginVertical: spacing.base,
    },
    previewLabel: {
      fontSize: 12,
      fontWeight: "600",
      color: colors.textSecondary,
      marginBottom: spacing.xs,
    },
    previewInput: {
      fontSize: typography.bodyDefault.fontSize,
      fontWeight: typography.bodyDefault.fontWeight,
      lineHeight: typography.bodyDefault.lineHeight,
      color: colors.text,
      minHeight: 48,
    },
    // lang
    languageRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.xs,
    },
    languageButton: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: radii.full,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
    },
    languageButtonActive: {
      backgroundColor: colors.primaryContainer,
      borderColor: colors.borderActive,
    },
    languageText: {
      color: colors.textSecondary,
      fontSize: 12,
    },
    languageTextActive: {
      color: colors.primary,
      fontWeight: "700",
    },
    // error
    errorContainer: {
      marginVertical: spacing.xs,
    },
    errorText: {
      color: colors.danger,
      fontSize: 12,
    },
    // action
    action: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      gap: spacing.md,
      marginTop: spacing.xs,
    },
    actionBtn: {
      flex: 1,
      height: 46,
      borderRadius: radii.full,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      gap: spacing.xs,
    },
    cancelButton: {
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.surface,
    },
    cancelText: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.textSecondary,
    },
    doneText: {
      fontSize: 14,
      fontWeight: "600",
      color: "#ffffff",
    },
  });
};

export type GlobalStyles = ReturnType<typeof createAddModalStyles>;
