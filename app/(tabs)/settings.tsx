import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createSettingsStyles } from "@/assets/styles/settings.style";
import DangerZone from "@/components/DangerZone";
import Header from "@/components/Header";
import Preferences from "@/components/Preferences";
import ProgressStats from "@/components/ProgressStats";
import useTheme from "@/hooks/useTheme";

const SettingsTab = () => {
  const { colors } = useTheme();
  const style = createSettingsStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={style.container}
    >
      <SafeAreaView style={style.safeArea}>
        <Header title="Settings" titleIcon="settings" />

        <ScrollView
          contentContainerStyle={style.content}
          showsVerticalScrollIndicator={false}
          style={style.scrollView}
        >
          <ProgressStats />
          <Preferences />
          <DangerZone />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SettingsTab;
