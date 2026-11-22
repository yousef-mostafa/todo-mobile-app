---
name: "Modern Task Flow"
description: "Design system and tokens for the Todo App, featuring clean card-based layouts, vibrant gradient accents, and seamless dual-theme (light/dark) mobile ergonomics."
version: "1.0.0"

colors:
  light:
    background: "#f8fafc"
    surface: "#ffffff"
    text: "#1e293b"
    text-muted: "#64748b"
    border: "#e2e8f0"
    primary: "#3b82f6"
    success: "#10b981"
    warning: "#f59e0b"
    danger: "#ef4444"
    shadow: "#000000"
    input-background: "#ffffff"
    edit-input-background: "#ffffff"

  dark:
    background: "#0f172a"
    surface: "#1e293b"
    text: "#f1f5f9"
    text-muted: "#94a3b8"
    border: "#334155"
    primary: "#60a5fa"
    success: "#34d399"
    warning: "#fbbf24"
    danger: "#f87171"
    shadow: "#000000"
    input-background: "#1e293b"
    edit-input-background: "#0f172a"

  gradients:
    primary:
      start: "#3b82f6"
      end: "#1d4ed8"
    success:
      start: "#10b981"
      end: "#059669"
    warning:
      start: "#f59e0b"
      end: "#d97706"
    danger:
      start: "#ef4444"
      end: "#dc2626"
    muted:
      start: "#9ca3af"
      end: "#6b7280"
    muted-dark:
      start: "#374151"
      end: "#4b5563"
    surface-light:
      start: "#ffffff"
      end: "#f8fafc"
    surface-dark:
      start: "#1e293b"
      end: "#334155"
    background-light:
      start: "#f8fafc"
      end: "#e2e8f0"
    background-dark:
      start: "#0f172a"
      end: "#1e293b"
    empty-light:
      start: "#f3f4f6"
      end: "#e5e7eb"
    empty-dark:
      start: "#374151"
      end: "#4b5563"

typography:
  fontFamily: "System (-apple-system, Roboto, Segoe UI, sans-serif)"
  title:
    fontSize: "32px"
    fontWeight: "700"
    letterSpacing: "-1px"
    lineHeight: "40px"
  section-title:
    fontSize: "20px"
    fontWeight: "700"
    letterSpacing: "-0.5px"
    lineHeight: "26px"
  stat-number:
    fontSize: "28px"
    fontWeight: "800"
    letterSpacing: "-1px"
    lineHeight: "34px"
  empty-title:
    fontSize: "24px"
    fontWeight: "700"
    letterSpacing: "-0.5px"
    lineHeight: "30px"
  loading-text:
    fontSize: "18px"
    fontWeight: "500"
    lineHeight: "24px"
  subtitle:
    fontSize: "17px"
    fontWeight: "500"
    lineHeight: "24px"
  body:
    fontSize: "17px"
    fontWeight: "500"
    lineHeight: "24px"
  input:
    fontSize: "17px"
    fontWeight: "500"
    lineHeight: "24px"
  setting-text:
    fontSize: "17px"
    fontWeight: "600"
    lineHeight: "22px"
  progress-text:
    fontSize: "16px"
    fontWeight: "700"
    lineHeight: "20px"
  stat-label:
    fontSize: "14px"
    fontWeight: "600"
    lineHeight: "18px"
  button-text:
    fontSize: "14px"
    fontWeight: "600"
    lineHeight: "18px"
  tab-label:
    fontSize: "12px"
    fontWeight: "700"
    lineHeight: "16px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  base: "16px"
  lg: "20px"
  xl: "24px"
  "2xl": "32px"
  "3xl": "40px"
  "4xl": "80px"
  bottom-nav: "90px"
  content-bottom: "120px"

rounded:
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  pill: "28px"
  circle-sm: "16px"
  circle-md: "20px"
  circle-lg: "60px"
  full: "9999px"

elevation:
  card:
    shadowColor: "#000000"
    shadowOffset:
      width: "0px"
      height: "4px"
    shadowOpacity: 0.1
    shadowRadius: "8px"
    elevation: 8

components:
  header:
    paddingHorizontal: "{spacing.xl}"
    paddingVertical: "{spacing.2xl}"
    iconSize: "56px"
    iconRadius: "{rounded.lg}"
  todoCard:
    borderRadius: "{rounded.xl}"
    padding: "{spacing.lg}"
    elevation: "{elevation.card.elevation}"
    gap: "{spacing.md}"
  input:
    borderRadius: "{rounded.xl}"
    borderWidth: "2px"
    paddingHorizontal: "{spacing.lg}"
    paddingVertical: "{spacing.base}"
    fontSize: "{typography.input.fontSize}"
  addButton:
    size: "56px"
    borderRadius: "{rounded.pill}"
  statCard:
    borderRadius: "{rounded.lg}"
    borderLeftWidth: "4px"
    padding: "{spacing.lg}"
    iconSize: "40px"
  bottomTabs:
    height: "{spacing.bottom-nav}"
    borderTopWidth: "1px"
    paddingTop: "10px"
    paddingBottom: "30px"
---

## Overview

**Modern Task Flow** is a mobile-first productivity design system tailored for Expo and React Native applications. Built to balance high visual polish with effortless usability, it features tactile card containers, rich two-stop linear gradients, fluid progress indicators, and comprehensive dual-theme support (light and dark mode).

### Core Principles
1. **Tactile Elevation & Depth**: Interfaces use elevated surface cards (`elevation: 8`, subtle shadows) floating over gentle background gradients rather than flat monotones.
2. **Gradient Accents for Semantic States**: Functional states (Primary action, Completed task, Pending alert, Destructive danger) are instantly recognized by expressive gradient icon badges and actionable buttons.
3. **Ergonomic Touch Targets**: Minimum interactive tap targets measure 40×40px or 56×56px with generous hit slop, ensuring smooth one-handed mobile navigation.
4. **Theme Parity**: Light and dark modes provide identical hierarchy and contrast ratios, utilizing slate neutrals (`#f8fafc` to `#0f172a`) to minimize eye strain.

---

## Colors

The color palette is divided into foundational neutrals (optimized for contrast and dark mode readability) and functional semantic hues paired with purposeful gradients.

### Palette Tokens

| Token Role | Light Mode | Dark Mode | Semantic Usage |
| :--- | :--- | :--- | :--- |
| `background` | `#f8fafc` (Slate 50) | `#0f172a` (Slate 900) | Root app canvas and screen wrappers |
| `surface` | `#ffffff` (White) | `#1e293b` (Slate 800) | Elevated cards, sections, and tab bars |
| `text` | `#1e293b` (Slate 800) | `#f1f5f9` (Slate 100) | High-contrast primary headings and text |
| `text-muted` | `#64748b` (Slate 500) | `#94a3b8` (Slate 400) | Subtitles, labels, placeholders, disabled states |
| `border` | `#e2e8f0` (Slate 200) | `#334155` (Slate 700) | Dividers, card boundaries, input strokes |
| `primary` | `#3b82f6` (Blue 500) | `#60a5fa` (Blue 400) | Primary actions, focused inputs, active tabs |
| `success` | `#10b981` (Emerald 500) | `#34d399` (Emerald 400) | Completed tasks, progress bars, confirmations |
| `warning` | `#f59e0b` (Amber 500) | `#fbbf24` (Amber 400) | In-progress indicators, edit actions, alerts |
| `danger` | `#ef4444` (Red 500) | `#f87171` (Red 400) | Delete actions, reset triggers, destructive alerts |

### Semantic Gradients

Gradients give physical depth to icon containers, actionable buttons, and progress fills:
* **Primary Gradient**: `["#3b82f6", "#1d4ed8"]` — Header badges, create button, primary highlights.
* **Success Gradient**: `["#10b981", "#059669"]` — Task completion checkboxes, progress fill, save button.
* **Warning Gradient**: `["#f59e0b", "#d97706"]` — Edit action buttons, pending task metrics.
* **Danger Gradient**: `["#ef4444", "#dc2626"]` — Delete icon buttons, reset application triggers.
* **Muted Gradient**: Light `["#9ca3af", "#6b7280"]`, Dark `["#374151", "#4b5563"]` — Unchecked task borders, cancel buttons, disabled states.
* **Empty Gradient**: Light `["#f3f4f6", "#e5e7eb"]`, Dark `["#374151", "#4b5563"]` — Empty state graphic backdrop.
* **Background Gradient**: Light `["#f8fafc", "#e2e8f0"]`, Dark `["#0f172a", "#1e293b"]` — Full-screen root canvas depth.
* **Surface Gradient**: Light `["#ffffff", "#f8fafc"]`, Dark `["#1e293b", "#334155"]` — Card surfaces and modal containers.

---

## Typography

The typography system relies on the platform's native system typeface (`-apple-system` / `SF Pro` on iOS, `Roboto` on Android) for maximum legibility and zero bundle overhead.

### Scale & Hierarchy

| Style Role | Font Size | Weight | Line Height | Tracking | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `title` | 32px | 700 (Bold) | 40px | -1.0px | Main screen headers ("Today's Tasks", "Settings") |
| `stat-number` | 28px | 800 (ExtraBold) | 34px | -1.0px | Numerical counters in progress and metrics cards |
| `empty-title` | 24px | 700 (Bold) | 30px | -0.5px | Empty state and major callout titles |
| `section-title` | 20px | 700 (Bold) | 26px | -0.5px | Group titles ("Preferences", "Danger Zone") |
| `loading-text` | 18px | 500 (Medium) | 24px | 0px | Status updates during network loads |
| `body` | 17px | 500 (Medium) | 24px | 0px | Todo task item content, default reading copy |
| `subtitle` | 17px | 500 (Medium) | 24px | 0px | Header auxiliary status ("2 of 5 Complete") |
| `input` | 17px | 500 (Medium) | 24px | 0px | Interactive text input fields |
| `setting-text` | 17px | 600 (SemiBold) | 22px | 0px | Preferences row titles and action labels |
| `progress-text` | 16px | 700 (Bold) | 20px | 0px | Percentage label on progress indicators |
| `stat-label` | 14px | 600 (SemiBold) | 18px | 0px | Descriptive labels below metric numbers |
| `button-text` | 14px | 600 (SemiBold) | 18px | 0px | Compact button labels ("Save", "Cancel") |
| `tab-label` | 12px | 700 (Bold) | 16px | 0px | Bottom navigation tab labels |

---

## Layout

Layouts follow strict vertical flow with consistent horizontal margins to ensure responsive alignment across phone and tablet screens.

### Grid & Spacing Scale
* **Base Unit**: 4px
* **Micro Spacing**: `xs` (4px), `sm` (8px), `md` (12px) for intra-component gaps and icon padding.
* **Macro Spacing**: `base` (16px), `lg` (20px), `xl` (24px), `2xl` (32px) for screen margins and component padding.
* **Layout Margins**:
  * Screen horizontal gutters: **24px** on main list screens, **20px** on settings content.
  * Header vertical breathing room: **32px** top padding, **24px** bottom padding.
  * Bottom list clearance: **100px – 120px** padding bottom to prevent floating bottom tab bar occlusion.

### Safe Area & Nav Geometry
* Screens are wrapped with `SafeAreaView` from `react-native-safe-area-context`.
* Bottom Tab Bar height is standardized at **90px** (including 30px bottom padding for native home indicator gestures).

---

## Elevation & Depth

Visual hierarchy is communicated via layered surfaces and consistent elevation parameters rather than hard borderlines.

### Elevation Levels

```
Layer 0: Background Canvas (LinearGradient: light/dark background)
  └── Layer 1: Surface Containers & Cards (LinearGradient: surface, Elevation 8)
        └── Layer 2: Interactive Controls (Gradient Badges, Inputs, Buttons)
              └── Layer 3: Dialogs & Overlays (Modals, Action Alerts)
```

### Elevation Specification
* **Card & Section Elevation**:
  * `elevation`: `8` (Android)
  * `shadowColor`: `#000000` (iOS)
  * `shadowOffset`: `{ width: 0, height: 4 }`
  * `shadowOpacity`: `0.1`
  * `shadowRadius`: `8px`
* **Focused State**:
  * Active input elements drop shadow elevation in favor of a crisp 2px colored border (`primary`: `#3b82f6`).

---

## Shapes

Shapes across the application maintain smooth, rounded geometry that feels friendly and tactile.

### Corner Radii Scale
* **`xs` (6px)**: Inner progress bar tracking and active fill pill.
* **`sm` (8px)**: Preference row icon containers (36×36px).
* **`md` (12px)**: Compact inline buttons (Save, Cancel).
* **`lg` (16px)**: Header icon badges (56×56px), stat metric cards, edit inputs.
* **`xl` (20px)**: Primary task cards (`TodoCard`), settings sections, text input field borders.
* **`pill` (28px)**: Floating action buttons (56×56px circular button).
* **`circle-lg` (60px)**: Empty state graphic containers (120×120px).
* **`full` (9999px)**: Checkbox items and full rounded badges.

---

## Components

### 1. Header (`Header.tsx`)
* **Anatomy**:
  * 56×56px rounded container (`r=16px`) with `primary` gradient and centered white icon (28px).
  * Column with 32px bold title (`text`) and optional 17px medium subtitle (`text-muted`).
  * Optional bottom slot for progress bars or action controls.
* **Behavior**: Fixed at the top of scrollable views with 24px horizontal padding.

### 2. Progress Indicator (`ProgressStats.tsx` & Index Header)
* **Track**: 12px height, `r=6px`, filled with `border` background color.
* **Fill**: Dynamic width percentage with `success` gradient and rounded corners.
* **Metrics**: 16px bold percentage text right-aligned in `success` color.

### 3. Add Todo Input (`AddTodo.tsx`)
* **Input Container**: `r=20px`, 2px solid border, 16px vertical and 20px horizontal padding.
* **Action Button**: Circular 56×56px button with `r=28px`.
  * *Active*: `primary` gradient with white plus icon.
  * *Disabled*: `muted` gradient with 50% opacity when text input is empty.

### 4. Todo Card (`TodoCard.tsx`)
* **Surface**: `surface` gradient background, `r=20px`, elevation 8.
* **Checkbox**: 32×32px circular container (`r=16px`).
  * *Uncompleted*: 2px border in `border` color, transparent fill.
  * *Completed*: `success` gradient fill, white checkmark icon, task text displays strikethrough with 0.6 opacity and `text-muted` color.
* **Actions**: Inline 40×40px circular buttons with `warning` (edit) and `danger` (delete) gradients.
* **Inline Editor**: Switches to auto-focusing multiline input with `r=16px` and paired Save / Cancel gradient buttons.

### 5. Metric Stat Cards (`ProgressStats.tsx`)
* **Card**: 4px solid left accent border indicating metric state (`primary` for Total, `success` for Completed, `warning` for Active).
* **Metrics Display**: 28px extra-bold counter with 14px semi-bold label.
* **Icon Pill**: 40×40px rounded badge (`r=20px`) matching the accent gradient.

### 6. Preferences Rows (`Preferences.tsx`)
* **Item Layout**: Horizontal row with 36×36px icon container (`r=8px`), 17px semi-bold title, and native `Switch` control.
* **Theming**: Track color dynamically binds to feature category (`primary` for Dark Mode, `warning` for Notifications, `success` for Auto-Sync).

### 7. Danger Zone (`DangerZone.tsx`)
* **Container**: Elevated surface section with `danger` colored section header.
* **Action Row**: 36×36px trash icon with `danger` gradient, 17px destructive title, and trailing chevron icon leading to confirmation modal.

### 8. Empty & Loading States (`EmptyState.tsx`, `LoadingSpinner.tsx`)
* **Empty State**: 120×120px circular icon (`r=60px`) with `empty` gradient, 24px bold header, and 17px muted explanation.
* **Loading Spinner**: Centered `ActivityIndicator` in `primary` tint with optional 18px medium status copy.

### 9. Bottom Navigation Tabs (`app/(tabs)/_layout.tsx`)
* **Geometry**: 90px height, 10px top padding, 30px bottom padding.
* **Styling**: `surface` background, 1px top border (`border`), active tint `primary`, inactive tint `text-muted`, 12px bold labels.

---

## Do's and Don'ts

### Do's
* **DO** access colors strictly via `useTheme()` to guarantee instant dark mode transitions.
* **DO** use `LinearGradient` from `expo-linear-gradient` for icon containers, progress fills, and actionable buttons.
* **DO** wrap all primary screens in `SafeAreaView` from `react-native-safe-area-context` to respect notches and home indicators.
* **DO** ensure touchable buttons maintain a minimum footprint of 40×40px with `activeOpacity={0.7}` or `{0.8}`.
* **DO** respect the established 4px spacing rhythm (`4`, `8`, `12`, `16`, `20`, `24`, `32`).
* **DO** provide clear confirmation dialogs via `Alert.alert` prior to executing destructive mutations.

### Don'ts
* **DON'T** hardcode raw hex color codes in component styles; always reference theme tokens.
* **DON'T** use sharp 0px border radii on cards or interactive elements; maintain the cohesive rounded design language.
* **DON'T** combine multiple conflicting bright accent colors within a single card.
* **DON'T** create custom typography families when system fonts ensure peak mobile performance and platform consistency.
* **DON'T** forget extra bottom padding (`paddingBottom: 100` or `120`) in scrollable views to avoid being obscured by the bottom tabs.
