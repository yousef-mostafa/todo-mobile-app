import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#1e293b",
          borderTopColor: "red",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="flash-outline"
              size={size}
              color={color as string}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color as string} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
