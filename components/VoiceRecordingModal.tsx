import { useEffect, useMemo, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Button,
  KeyboardAvoidingView,
  Linking,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { createAddModalStyles } from "@/assets/styles/addModal.styles";
import useAudio from "@/hooks/useAudio";
import useSpeechLang from "@/hooks/useSpeechLang";
import useTheme from "@/hooks/useTheme";

import { Ionicons } from "@expo/vector-icons";

interface Props {
  visible: boolean;
  onClose: () => void;
  onSaveTranscript: (text: string) => void;
}

const VoiceRecordingModal = ({ visible, onClose, onSaveTranscript }: Props) => {
  const { colors } = useTheme();
  const { speechLanguages, currentSpeechLang, setCurrentSpeechLang } =
    useSpeechLang();
  const [seconds, setSeconds] = useState(0);
  const [editedTranscript, setEditedTranscript] = useState("");
  const [hasEditedTranscript, setHasEditedTranscript] = useState(false);

  const audio = useAudio();
  const transcript = hasEditedTranscript ? editedTranscript : audio.transcript;

  const styles = useMemo(() => createAddModalStyles(colors), [colors]);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (visible && audio.isListening) {
      timer = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [visible, audio.isListening]);

  const handleClose = () => {
    audio.stopListening();
    setSeconds(0);
    onClose();
  };

  const toggleRecording = async () => {
    if (audio.isListening) {
      audio.stopListening();
      return;
    }

    setSeconds(0);
    setEditedTranscript("");
    setHasEditedTranscript(false);
    await audio.startListening();
  };

  const handleDone = () => {
    if (transcript.trim()) {
      onSaveTranscript(transcript.trim());
    }
    handleClose();
  };

  const formattedTime = `00:${seconds < 10 ? `0${seconds}` : seconds}`;

  const waveformHeights = [12, 22, 34, 18, 28, 38, 26, 16, 32, 20, 14];

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={handleClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.backdrop}
      >
        <Pressable onPress={handleClose}>
          <Pressable
            style={styles.sheetContainer}
            onPress={(e) => e.stopPropagation()}
          >
            {/* Sheet Handle */}
            <View style={{ alignItems: "center", flex: 1, marginBottom: 8 }}>
              <View style={styles.handleBar} />
            </View>

            {audio.permanentlyDenied ? (
              <View>
                <Text>
                  Microphone access is disabled. Enable it in Settings to record
                  audio.
                </Text>
                <Button
                  title="Open Settings"
                  onPress={() => Linking.openSettings()}
                />
              </View>
            ) : (
              <>
                {/* Header Row */}
                <View style={styles.headerRow}>
                  <View>
                    <Text style={styles.title}>Task Input</Text>
                    <Text style={styles.subtitle}>
                      Create tasks automatically using your voice
                    </Text>
                  </View>
                  {/* TODO: handle color */}
                  <TouchableOpacity activeOpacity={0.8} onPress={onClose}>
                    <LinearGradient
                      colors={colors.gradients.empty}
                      style={styles.closeButton}
                    >
                      <Ionicons color="#000" name="close" size={18} />
                    </LinearGradient>
                  </TouchableOpacity>
                </View>

                {/* speech to text */}
                <View style={styles.speechContainer}>
                  <View style={styles.timerPill}>
                    <View
                      style={[
                        styles.timerDot,
                        {
                          backgroundColor: audio.isListening
                            ? colors.danger
                            : colors.textSecondary,
                        },
                      ]}
                    />
                    <Text style={styles.timerText}>{formattedTime} </Text>
                  </View>

                  {/* Waveform Bars in Emerald */}
                  <View style={styles.waveformRow}>
                    {waveformHeights.map((h, i) => (
                      <View
                        key={i}
                        style={[
                          styles.waveformBar,
                          {
                            height: audio.isListening ? h : 6,
                            opacity: audio.isListening ? 0.9 : 0.3,
                          },
                        ]}
                      />
                    ))}
                  </View>

                  {/* Pulsing Microphone Button in Emerald */}
                  <View style={styles.micButtonWrapper}>
                    <View
                      style={[
                        styles.micPulseRing,
                        { opacity: audio.isListening ? 0.8 : 0.2 },
                      ]}
                    />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={toggleRecording}
                    >
                      <LinearGradient
                        colors={colors.gradients.primary}
                        style={styles.micButton}
                      >
                        <Ionicons
                          color="#ffffff"
                          name={audio.isListening ? "mic" : "mic-off"}
                          size={30}
                        />
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>

                  {/* Language */}
                  <View style={styles.languageRow}>
                    <Text style={styles.previewLabel}>Language:</Text>
                    {speechLanguages.map((item) => {
                      const active = currentSpeechLang === item.key;
                      return (
                        <TouchableOpacity
                          key={item.key}
                          style={[
                            styles.languageButton,
                            active && styles.languageButtonActive,
                          ]}
                          onPress={() => setCurrentSpeechLang(item.key)}
                        >
                          <Text
                            style={[
                              styles.languageText,
                              active && styles.languageTextActive,
                            ]}
                          >
                            {item.label}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>

                {/* Real-time Transcript Preview Box */}
                <View style={styles.previewCard}>
                  <Text style={styles.previewLabel}>Todo Text</Text>
                  <TextInput
                    multiline
                    placeholder="Speaking or Typing..."
                    placeholderTextColor={colors.textSecondary}
                    style={styles.previewInput}
                    value={transcript}
                    onChangeText={(text) => {
                      setEditedTranscript(text);
                      setHasEditedTranscript(true);
                    }}
                  />
                </View>

                {/* Error */}
                {audio.error && (
                  <View style={styles.errorContainer}>
                    <Text accessibilityRole="alert" style={styles.errorText}>
                      {audio.error}
                    </Text>
                  </View>
                )}

                {/* Bottom Action */}
                <View style={styles.action}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={[styles.actionBtn, styles.cancelButton]}
                    onPress={handleClose}
                  >
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ flex: 1 }}

                    onPress={handleDone}
                  >
                    <LinearGradient
                      colors={colors.gradients.primary}
                      style={styles.actionBtn}
                    >
                      <Ionicons color="#ffffff" name="checkmark" size={18} />
                      <Text style={styles.doneText}>Add Task</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default VoiceRecordingModal;
