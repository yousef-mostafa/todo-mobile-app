import { StyleSheet,Text, View } from "react-native";

const SettingsTab = () => {
  return (
    <View style={style.container}>
      <Text>SettingsTab</Text>
    </View>
  );
};

export default SettingsTab;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
