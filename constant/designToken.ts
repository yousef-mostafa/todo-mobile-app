export const spacing = {
  "2xs": 2,
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  "2xl": 32,
  gutter: 20,
  headerHeight: 64,
  bottomNavHeight: 76,
} as const;

export const radii = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 18,
  xl: 22,
  "2xl": 26,
  sheet: 32,
  full: 9999,
} as const;

export const typography = {
  titleApp: {
    fontSize: 24,
    fontWeight: "700" as const,
    lineHeight: 28,
    letterSpacing: -0.5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700" as const,
    lineHeight: 24,
    letterSpacing: -0.25,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600" as const,
    lineHeight: 22,
  },
  metricLarge: {
    fontSize: 26,
    fontWeight: "800" as const,
    lineHeight: 32,
    letterSpacing: -0.5,
  },
  bodyDefault: {
    fontSize: 15,
    fontWeight: "500" as const,
    lineHeight: 22,
  },
  bodyMuted: {
    fontSize: 13,
    fontWeight: "400" as const,
    lineHeight: 18,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "600" as const,
    lineHeight: 20,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: "600" as const,
    lineHeight: 14,
  },
} as const;

export interface ColorScheme {
  surface: string;
  card: string;
  cardSecondary: string;
  input: string;
  modal: string;
  text: string;
  textSecondary: string;
  textOnPrimary: string;
  primary: string;
  primaryHover: string;
  primaryLight: string;
  primaryContainer: string;
  border: string;
  borderSubtle: string;
  borderActive: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
  shadow: string;
  gradients: {
    background: [string, string];
    surface: [string, string];
    primary: [string, string];
    success: [string, string];
    warning: [string, string];
    danger: [string, string];
    info: [string, string];
    muted: [string, string];
    empty: [string, string];
  };
  backgrounds: {
    input: string;
    editInput: string;
  };
  statusBarStyle: "light-content" | "dark-content";
}

export const lightColors: ColorScheme = {
  surface: "#ffffff",
  card: "#ffffff",
  cardSecondary: "#f1f5f9",
  input: "#f8fafc",
  modal: "#ffffff",
  text: "#0f172a",
  textSecondary: "#64748b",
  textOnPrimary: "#ffffff",
  primary: "#10b981",
  primaryHover: "#059669",
  primaryLight: "#34d399",
  primaryContainer: "#ecfdf5",
  border: "#e2e8f0",
  borderSubtle: "#f1f5f9",
  borderActive: "#10b981",
  success: "#10b981",
  warning: "#f59e0b",
  danger: "#ef4444",
  info: "#3b82f6",
  shadow: "rgba(0, 0, 0, 0.08)",
  gradients: {
    background: ["#f8fafc", "#e2e8f0"],
    surface: ["#ffffff", "#f8fafc"],
    primary: ["#10b981", "#059669"],
    success: ["#10b981", "#059669"],
    warning: ["#f59e0b", "#d97706"],
    danger: ["#ef4444", "#dc2626"],
    info: ["#3b82f6", "#2563eb"],
    muted: ["#94a3b8", "#64748b"],
    empty: ["#f1f5f9", "#e2e8f0"],
  },
  backgrounds: {
    input: "#f8fafc",
    editInput: "#ffffff",
  },
  statusBarStyle: "dark-content",
};

export const darkColors: ColorScheme = {
  surface: "#131d31",
  card: "#131d31",
  cardSecondary: "#1e293b",
  input: "#0f172a",
  modal: "#131d31",
  text: "#f8fafc",
  textSecondary: "#94a3b8",
  textOnPrimary: "#ffffff",
  primary: "#10b981",
  primaryHover: "#059669",
  primaryLight: "#34d399",
  primaryContainer: "rgba(16, 185, 129, 0.15)",
  border: "#25334d",
  borderSubtle: "#1a253a",
  borderActive: "#34d399",
  success: "#34d399",
  warning: "#fbbf24",
  danger: "#f87171",
  info: "#60a5fa",
  shadow: "rgba(0, 0, 0, 0.35)",
  gradients: {
    background: ["#0b1120", "#131d31"],
    surface: ["#131d31", "#1e293b"],
    primary: ["#10b981", "#059669"],
    success: ["#34d399", "#10b981"],
    warning: ["#fbbf24", "#d97706"],
    danger: ["#f87171", "#dc2626"],
    info: ["#60a5fa", "#3b82f6"],
    muted: ["#334155", "#1e293b"],
    empty: ["#1e293b", "#131d31"],
  },
  backgrounds: {
    input: "#0f172a",
    editInput: "#0f172a",
  },
  statusBarStyle: "light-content",
};
