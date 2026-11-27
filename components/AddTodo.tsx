import { useMemo, useState } from "react";
import { useMutation } from "convex/react";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";

import VoiceRecordingModal from "@/components/VoiceRecordingModal";
import { radii } from "@/constant/designToken";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";

import { Ionicons } from "@expo/vector-icons";

const AddTodo = () => {
  const { colors } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        addButton: {
          width: 56,
          height: 56,
          borderRadius: radii.full,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.primary,
          borderWidth: 1,
          borderColor: colors.borderActive,
          position: "absolute",
          bottom: 24,
          right: 24,
          // iOS shadow
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 6,
          // Android elevation
          elevation: 6,
          zIndex: 10,
        },
      }),
    [colors.primary, colors.borderActive, colors.shadow],
  );

  const [isVoiceModalVisible, setIsVoiceModalVisible] =
    useState<boolean>(false);

  const addTodo = useMutation(api.todos.addTodo);

  async function handleVoiceTaskAdd(transcribedText: string) {
    if (!transcribedText.trim()) return;
    try {
      await addTodo({ text: transcribedText.trim() });
    } catch (error) {
      Alert.alert("Error", "Failed to add todo: " + error);
    }
  }

  return (
    <>
      {/* Voice Input Trigger Button */}
      <TouchableOpacity
        accessibilityLabel="Add Task"
        accessibilityRole="button"
        style={styles.addButton}
        onPress={() => setIsVoiceModalVisible(true)}
      >
        <Ionicons color={colors.surface} name="add" size={20} />
      </TouchableOpacity>

      {/* Voice Recording Modal */}
      <VoiceRecordingModal
        visible={isVoiceModalVisible}
        onClose={() => setIsVoiceModalVisible(false)}
        onSaveTranscript={handleVoiceTaskAdd}
      />
    </>
  );
};

export default AddTodo;
