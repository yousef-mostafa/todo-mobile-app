import { useMemo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import { createGlobalStyles } from "@/assets/styles/global.styles";
import { spacing } from "@/constant/designToken";
import useTheme from "@/hooks/useTheme";

interface Props {
  showMessage?: boolean;
  message?: string;
  size?: "small" | "large";
}

const LoadingSpinner = ({
  showMessage = false,
  message = "Loading...",
  size = "large",
}: Props) => {
  const { colors } = useTheme();

  const globalStyles = useMemo(() => createGlobalStyles(colors), [colors]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
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
          textAlign: "center",
        },
      }),
    [colors.text],
  );

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={globalStyles.container}
    >
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={colors.primary} size={size} />
        {showMessage && message ? (
          <Text style={styles.loadingText}>{message}</Text>
        ) : null}
      </View>
    </LinearGradient>
  );
};

export default LoadingSpinner;
