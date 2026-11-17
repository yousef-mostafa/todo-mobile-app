import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useTheme from "../../hooks/useTheme";

// rnfe
export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={style.container}>
      <Text>Test TODO Apps</Text>

      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the mode</Text>
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
