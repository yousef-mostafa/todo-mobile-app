import { ComponentProps, useMemo, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Switch, Text, View } from "react-native";

import { createGlobalStyles } from "@/assets/styles/global.styles";
import { radii, spacing, typography } from "@/constant/designToken";
import useTheme from "@/hooks/useTheme";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

interface PreferenceItem {
  key: string;
  color: "primary" | "success" | "warning";
  title: string;
  icon: ComponentProps<typeof FontAwesome6>["name"];
  value: boolean;
  onChange: () => void;
}

const Preferences = () => {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const { isDarkMode, toggleDarkMode, colors } = useTheme();

  const globalStyles = useMemo(() => createGlobalStyles(colors), [colors]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        settingItem: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: spacing.base,
          borderBottomWidth: 1,
          borderBottomColor: colors.borderSubtle,
        },
        settingLeft: {
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        },
        settingIcon: {
          width: 36,
          height: 36,
          borderRadius: radii.sm,
          justifyContent: "center",
          alignItems: "center",
          marginRight: spacing.base,
        },
        settingText: {
          fontSize: typography.bodyDefault.fontSize,
          fontWeight: "600",
          color: colors.text,
        },
      }),
    [colors.borderSubtle, colors.text],
  );

  const items: PreferenceItem[] = [
    {
      key: "dark-mode",
      color: "primary",
      title: "Dark Mode",
      icon: "moon",
      value: isDarkMode,
      onChange: toggleDarkMode,
    },
    {
      key: "notifications",
      color: "success",
      title: "Notifications",
      icon: "bell",
      value: isNotificationsEnabled,
      onChange: () => setIsNotificationsEnabled((current) => !current),
    },
    {
      key: "auto-sync",
      color: "warning",
      title: "Auto Sync",
      icon: "arrows-rotate",
      value: isAutoSync,
      onChange: () => setIsAutoSync((current) => !current),
    },
  ];

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={globalStyles.section}
    >
      <Text style={globalStyles.sectionTitle}>Preferences</Text>

      {items.map((item, index) => (
        <View
          key={item.key}
          style={[
            styles.settingItem,
            index === items.length - 1 && { borderBottomWidth: 0 },
          ]}
        >
          <View style={styles.settingLeft}>
            <LinearGradient
              colors={colors.gradients[item.color]}
              style={styles.settingIcon}
            >
              <FontAwesome6 color="#fff" name={item.icon} size={18} />
            </LinearGradient>
            <Text style={styles.settingText}>{item.title}</Text>
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
