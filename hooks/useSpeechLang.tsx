import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export type RecognitionLanguage = "device" | "en-US" | "ar-EG";

const SPEECH_LANGUAGE_STORAGE_KEY = "speechLanguage";

const speechLanguages: { key: RecognitionLanguage; label: string }[] = [
  { key: "device", label: "Device" },
  { key: "en-US", label: "English" },
  { key: "ar-EG", label: "العربية" },
];

interface SpeechLangContextValue {
  speechLanguages: typeof speechLanguages;
  currentSpeechLang: RecognitionLanguage;
  setCurrentSpeechLang: (language: RecognitionLanguage) => void;
}

const SpeechLangContext = createContext<SpeechLangContextValue | undefined>(
  undefined,
);

export function SpeechLangProvider({ children }: { children: ReactNode }) {
  const [currentSpeechLang, setCurrentSpeechLangState] =
    useState<RecognitionLanguage>("device");

  useEffect(() => {
    let isMounted = true;

    AsyncStorage.getItem(SPEECH_LANGUAGE_STORAGE_KEY)
      .then((storedLanguage) => {
        if (
          isMounted &&
          (storedLanguage === "device" ||
            storedLanguage === "en-US" ||
            storedLanguage === "ar-EG")
        ) {
          setCurrentSpeechLangState(storedLanguage);
        }
      })
      .catch((error) => {
        console.warn("Could not load speech language preference:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const setCurrentSpeechLang = (language: RecognitionLanguage) => {
    setCurrentSpeechLangState(language);
    AsyncStorage.setItem(SPEECH_LANGUAGE_STORAGE_KEY, language).catch(
      (error) => {
        console.warn("Could not save speech language preference:", error);
      },
    );
  };

  return (
    <SpeechLangContext.Provider
      value={{ speechLanguages, currentSpeechLang, setCurrentSpeechLang }}
    >
      {children}
    </SpeechLangContext.Provider>
  );
}

export default function useSpeechLang() {
  const context = useContext(SpeechLangContext);

  if (!context) {
    throw new Error("useSpeechLang must be used within a SpeechLangProvider");
  }

  return context;
}
