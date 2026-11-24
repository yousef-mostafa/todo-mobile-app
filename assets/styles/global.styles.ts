import { StyleSheet } from "react-native";

import {
  ColorScheme,
  radii,
  spacing,
  typography,
} from "@/constant/designToken";

export const createGlobalStyles = (colors: ColorScheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      paddingHorizontal: spacing.gutter,
      gap: spacing.base,
      paddingBottom: 120,
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
    fullWidthContainer: {
      flex: 1,
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
  });
};

export type GlobalStyles = ReturnType<typeof createGlobalStyles>;
