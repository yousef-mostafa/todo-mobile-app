import { Tabs } from "expo-router";

import useTheme from "@/hooks/useTheme";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const TabsLayout = () => {
  const { colors, spacing, typography } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          height: spacing.bottomNavHeight,
          paddingBottom: 14,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: typography.tabLabel.fontSize,
          fontWeight: typography.tabLabel.fontWeight,
          lineHeight: typography.tabLabel.lineHeight,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 color={color as string} name="bolt" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 color={color as string} name="user" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 color={color as string} name="gear" size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
