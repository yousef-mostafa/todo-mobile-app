import { useState } from "react";
import {
  ExpoSpeechRecognitionModule,
  useSpeechRecognitionEvent,
} from "expo-speech-recognition";

import useSpeechLang, { type RecognitionLanguage } from "./useSpeechLang";

export default function useAudio() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [permanentlyDenied, setPermanentlyDenied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { currentSpeechLang } = useSpeechLang();

  // Listen for live and final speech-to-text results
  useSpeechRecognitionEvent("result", (event) => {
    const text = event.results[0]?.transcript ?? "";
    if (text) {
      setTranscript(text);
    }
  });

  useSpeechRecognitionEvent("start", () => setIsListening(true));
  useSpeechRecognitionEvent("end", () => setIsListening(false));

  useSpeechRecognitionEvent("error", (event) => {
    console.warn("Speech recognition error:", event.error, event.message);
    setError(
      event.error === "no-speech"
        ? "No speech detected. Tap the mic, wait for the listening indicator, then speak clearly."
        : event.message || "Speech recognition failed. Please try again.",
    );
    setIsListening(false);
  });

  const startListening = async (
    nextLanguage: RecognitionLanguage = currentSpeechLang,
  ) => {
    try {
      setError(null);
      if (!ExpoSpeechRecognitionModule.isRecognitionAvailable()) {
        setError(
          "Speech recognition is unavailable. Install or enable a speech recognition service on this phone.",
        );
        return;
      }

      const perm = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
      if (!perm.granted) {
        if (!perm.canAskAgain) {
          setPermanentlyDenied(true);
        }
        return;
      }

      setPermanentlyDenied(false);
      setTranscript("");

      ExpoSpeechRecognitionModule.start({
        ...(nextLanguage === "device" ? {} : { lang: nextLanguage }),
        interimResults: true,
        continuous: false,
      });
    } catch (cause) {
      console.warn("Could not start speech recognition:", cause);
      setError("Could not start speech recognition. Please try again.");
      setIsListening(false);
    }
  };

  const stopListening = () => {
    ExpoSpeechRecognitionModule.stop();
  };

  return {
    isListening,
    transcript,
    permanentlyDenied,
    error,
    startListening,
    stopListening,
  };
}
