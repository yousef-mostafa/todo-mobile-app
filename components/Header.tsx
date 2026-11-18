import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

import { createHomeStyles } from "@/assets/styles/home.style.";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";

import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const { colors } = useTheme();

  const style = createHomeStyles(colors);
  const todos = useQuery(api.todos.getTodos);

  const completedCount = todos
    ? todos.filter((todo) => todo.isCompleted).length
    : 0;

  const totalCount = todos ? todos.length : 0;
  const completedPercentage =
    totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <View style={style.header}>
      {/* title */}
      <View style={style.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={style.iconContainer}
        >
          <Ionicons color={"#fff"} name="flash-outline" size={28} />
        </LinearGradient>

        <View style={style.titleTextContainer}>
          <Text style={style.title}>Today&apos;s Tasks</Text>

          <Text style={style.subtitle}>
            {`${completedCount} of ${totalCount} Complete`}
          </Text>
        </View>
      </View>

      {/* progress bar */}
      <View style={style.progressContainer}>
        <View style={style.progressBarContainer}>
          <View style={style.progressBar}>
            <LinearGradient
              colors={colors.gradients.success}
              style={[style.progressFill, { width: `${completedPercentage}%` }]}
            />
          </View>
          <Text style={style.progressText}>
            {Math.round(completedPercentage)} %
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
