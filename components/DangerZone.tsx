import { useMemo } from "react";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { createGlobalStyles } from "@/assets/styles/global.styles";
import { radii, spacing, typography } from "@/constant/designToken";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";

import { Ionicons } from "@expo/vector-icons";

const DangerZone = () => {
  const { colors } = useTheme();

  const globalStyles = useMemo(() => createGlobalStyles(colors), [colors]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        sectionTitleDanger: {
          fontSize: typography.sectionTitle.fontSize,
          fontWeight: typography.sectionTitle.fontWeight,
          lineHeight: typography.sectionTitle.lineHeight,
          letterSpacing: typography.sectionTitle.letterSpacing,
          marginBottom: spacing.base,
          color: colors.danger,
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
        actionTextDanger: {
          fontSize: typography.bodyDefault.fontSize,
          fontWeight: "600",
          color: colors.danger,
        },
      }),
    [colors.danger, colors.borderSubtle],
  );

  const clearAllTodos = useMutation(api.todos.resetApp);

  const handleResetApp = async () => {
    Alert.alert(
      "Reset App",
      "⚠️ This will delete ALL your todos permanently. This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete All",
          style: "destructive",
          onPress: async () => {
            try {
              const result = await clearAllTodos();
              Alert.alert(
                "App Reset",
                `Successfully deleted ${result.deletedCount} todo${result.deletedCount === 1 ? "" : "s"}. Your app has been reset.`,
              );
            } catch {
              Alert.alert("Error", "Failed to reset app");
            }
          },
        },
      ],
    );
  };

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={globalStyles.section}
    >
      <Text style={styles.sectionTitleDanger}>Danger Zone</Text>

      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.actionButton, { borderBottomWidth: 0 }]}
        onPress={handleResetApp}
      >
        <View style={styles.actionLeft}>
          <LinearGradient
            colors={colors.gradients.danger}
            style={styles.actionIcon}
          >
            <Ionicons color="#ffffff" name="trash" size={18} />
          </LinearGradient>
          <Text style={styles.actionTextDanger}>Reset App</Text>
        </View>
        <Ionicons color={colors.textSecondary} name="chevron-forward" size={18} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DangerZone;
