import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createHomeStyles } from "@/assets/styles/home.style.";
import AddTodo from "@/components/AddTodo";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";

// rnfe
export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const style = createHomeStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={style.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={style.safeArea}>
        <Header />
        <AddTodo />

        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle the mode</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
