import { ComponentProps } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

import { createHomeStyles } from "@/assets/styles/home.style.";
import useTheme from "@/hooks/useTheme";

import { Ionicons } from "@expo/vector-icons";

interface Props {
  icon?: ComponentProps<typeof Ionicons>["name"];
  title: string;
  subtitle?: string | undefined;
}

const EmptyState = ({ icon = "ban-outline", title, subtitle }: Props) => {
  const { colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  return (
    <View style={homeStyles.emptyContainer}>
      <LinearGradient
        colors={colors.gradients.empty}
        style={homeStyles.emptyIconContainer}
      >
        <Ionicons color={colors.textSecondary} name={icon} size={48} />
      </LinearGradient>
      <Text style={homeStyles.emptyText}>{title}</Text>
      {subtitle && <Text style={homeStyles.emptySubtext}>{subtitle}</Text>}
    </View>
  );
};

export default EmptyState;
