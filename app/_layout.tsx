import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";

import { SpeechLangProvider } from "@/hooks/useSpeechLang";
import { ThemeProvider } from "@/hooks/useTheme";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <SpeechLangProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
          </Stack>
        </SpeechLangProvider>
      </ThemeProvider>
    </ConvexProvider>
  );
}
