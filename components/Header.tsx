import { ComponentProps, ReactNode, useMemo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

import { createGlobalStyles } from "@/assets/styles/global.styles";
import { spacing, typography } from "@/constant/designToken";
import useTheme from "@/hooks/useTheme";

import { Ionicons } from "@expo/vector-icons";

interface Props {
  title: string;
  titleIcon: ComponentProps<typeof Ionicons>["name"];
  subtitle?: string;
  children?: ReactNode;
}

const Header = ({ title, titleIcon, subtitle, children }: Props) => {
  const { colors } = useTheme();

  const globalStyles = useMemo(() => createGlobalStyles(colors), [colors]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        header: {
          paddingHorizontal: spacing.gutter,
          paddingVertical: spacing.xl,
          paddingBottom: spacing.base,
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
      }),
    [colors.textSecondary, colors.text],
  );

  return (
    <View style={styles.header}>
      <View style={globalStyles.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={globalStyles.iconContainer}
        >
          <Ionicons color={"#fff"} name={titleIcon} size={24} />
        </LinearGradient>

        <View style={globalStyles.fullWidthContainer}>
          <Text style={styles.title}>{title}</Text>

          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>

      {children}
    </View>
  );
};

export default Header;
