import { useMemo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createGlobalStyles } from "@/assets/styles/global.styles";
import DangerZone from "@/components/DangerZone";
import Header from "@/components/Header";
import Preferences from "@/components/Preferences";
import ProgressStats from "@/components/ProgressStats";
import { spacing } from "@/constant/designToken";
import useTheme from "@/hooks/useTheme";

const SettingsTab = () => {
  const { colors } = useTheme();

  const globalStyles = useMemo(() => createGlobalStyles(colors), [colors]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        content: {
          paddingHorizontal: spacing.gutter,
          gap: spacing.base,
          paddingBottom: 120,
        },
      }),
    [],
  );

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={globalStyles.container}
    >
      <SafeAreaView style={globalStyles.safeArea}>
        <Header title="Settings" titleIcon="settings-outline" />

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          style={globalStyles.scrollView}
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
