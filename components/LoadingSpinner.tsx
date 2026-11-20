import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, Text, View } from "react-native";

import { createHomeStyles } from "@/assets/styles/home.style.";
import useTheme from "@/hooks/useTheme";

interface Props {
  showMessage?: boolean;
  message?: string;
  size?: "small" | "large" | undefined;
}

const LoadingSpinner = ({
  showMessage = false,
  message,
  size = "small",
}: Props) => {
  const { colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <View style={homeStyles.loadingContainer}>
        <ActivityIndicator color={colors.primary} size={size} />
        {showMessage && <Text style={homeStyles.loadingText}>{message}</Text>}
      </View>
    </LinearGradient>
  );
};

export default LoadingSpinner;
