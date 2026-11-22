import { ComponentProps, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Switch, Text, View } from "react-native";

import { createSettingsStyles } from "@/assets/styles/settings.style";
import useTheme from "@/hooks/useTheme";

import { Ionicons } from "@expo/vector-icons";

interface PreferenceItem {
  key: string;
  color: "primary" | "success" | "warning";
  title: string;
  icon: ComponentProps<typeof Ionicons>["name"];
  value: boolean;
  onChange: () => void;
}

const Preferences = () => {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const { isDarkMode, toggleDarkMode, colors } = useTheme();

  const settingsStyles = createSettingsStyles(colors);

  const items: PreferenceItem[] = [
    {
      key: "total",
      color: "primary",
      title: "Dark Mode",
      icon: "list",
      value: isDarkMode,
      onChange: toggleDarkMode,
    },
    {
      key: "completed",
      color: "success",
      title: "Notifications",
      icon: "checkmark-circle",
      value: isNotificationsEnabled,
      onChange: () => setIsNotificationsEnabled((current) => !current),
    },
    {
      key: "active",
      color: "warning",
      title: "Auto Sync",
      icon: "time",
      value: isAutoSync,
      onChange: () => setIsAutoSync((current) => !current),
    },
  ];

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyles.section}
    >
      <Text style={settingsStyles.sectionTitle}>Preferences</Text>

      {items.map((item) => (
        <View key={item.key} style={settingsStyles.settingItem}>
          <View style={settingsStyles.settingLeft}>
            <LinearGradient
              colors={colors.gradients[item.color]}
              style={settingsStyles.settingIcon}
            >
              <Ionicons color="#fff" name={item.icon} size={18} />
            </LinearGradient>
            <Text style={settingsStyles.settingText}>{item.title}</Text>
          </View>
          <Switch
            ios_backgroundColor={colors.border}
            thumbColor={"#fff"}
            trackColor={{ false: colors.border, true: colors[item.color] }}
            value={item.value}
            onValueChange={item.onChange}
          />
        </View>
      ))}
    </LinearGradient>
  );
};

export default Preferences;
