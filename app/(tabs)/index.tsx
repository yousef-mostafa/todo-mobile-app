import { StyleSheet, Text, View } from "react-native";

// rnfe
export default function Index() {
  return (
    <View style={style.container}>
      <Text>Test TODO Apps</Text>
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
