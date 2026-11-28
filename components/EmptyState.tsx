import { ComponentProps, useMemo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

import { spacing, typography } from "@/constant/designToken";
import useTheme from "@/hooks/useTheme";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

interface Props {
  icon?: ComponentProps<typeof FontAwesome6>["name"];
  title: string;
  subtitle?: string | undefined;
}

const EmptyState = ({ icon = "ban", title, subtitle }: Props) => {
  const { colors } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
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
      }),
    [colors.textSecondary, colors.text],
  );

  return (
    <View style={styles.emptyContainer}>
      <LinearGradient
        colors={colors.gradients.empty}
        style={styles.emptyIconContainer}
      >
        <FontAwesome6 color={colors.textSecondary} name={icon} size={48} />
      </LinearGradient>
      <Text style={styles.emptyText}>{title}</Text>
      {subtitle && <Text style={styles.emptySubtext}>{subtitle}</Text>}
    </View>
  );
};

export default EmptyState;
