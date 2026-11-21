import { ComponentProps, ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

import { createHomeStyles } from "@/assets/styles/home.style.";
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

  const style = createHomeStyles(colors);

  return (
    <View style={style.header}>
      <View style={style.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={style.iconContainer}
        >
          <Ionicons color={"#fff"} name={titleIcon} size={28} />
        </LinearGradient>

        <View style={style.titleTextContainer}>
          <Text style={style.title}>{title}</Text>

          {subtitle && <Text style={style.subtitle}>{subtitle}</Text>}
        </View>
      </View>

      {children}
    </View>
  );
};

export default Header;
