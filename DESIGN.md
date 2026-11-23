# Modern Task Flow — Design System Tokens & Specifications (v2.0)

This document provides the authoritative design tokens and component standards for **TaskFlow**, synthesized across all active screens in both **Light Mode** and **Dark Mode**.

---

## 1. Design Tokens Specification

### 1.1 Color Tokens (Dual-Theme Parity)

```json
{
  "color": {
    "brand": {
      "primary": {
        "value": "#10b981",
        "type": "color",
        "description": "Emerald Green primary brand accent"
      },
      "primary-hover": { "value": "#059669", "type": "color" },
      "primary-light": { "value": "#34d399", "type": "color" },
      "primary-container": {
        "light": "#ecfdf5",
        "dark": "rgba(16, 185, 129, 0.15)"
      }
    },
    "surface": {
      "background": {
        "light": "#f8fafc",
        "dark": "#0b1120"
      },
      "card": {
        "light": "#ffffff",
        "dark": "#131d31"
      },
      "card-secondary": {
        "light": "#f1f5f9",
        "dark": "#1e293b"
      },
      "input": {
        "light": "#f8fafc",
        "dark": "#0f172a"
      },
      "modal": {
        "light": "#ffffff",
        "dark": "#131d31"
      }
    },
    "text": {
      "primary": {
        "light": "#0f172a",
        "dark": "#f8fafc"
      },
      "secondary": {
        "light": "#64748b",
        "dark": "#94a3b8"
      },
      "muted": {
        "light": "#94a3b8",
        "dark": "#64748b"
      },
      "on-primary": {
        "light": "#ffffff",
        "dark": "#ffffff"
      }
    },
    "border": {
      "subtle": {
        "light": "#f1f5f9",
        "dark": "#1a253a"
      },
      "default": {
        "light": "#e2e8f0",
        "dark": "#25334d"
      },
      "active": {
        "light": "#10b981",
        "dark": "#34d399"
      }
    },
    "semantic": {
      "success": {
        "light": "#10b981",
        "dark": "#34d399"
      },
      "warning": {
        "light": "#f59e0b",
        "dark": "#fbbf24"
      },
      "danger": {
        "light": "#ef4444",
        "dark": "#f87171"
      },
      "info": {
        "light": "#3b82f6",
        "dark": "#60a5fa"
      }
    }
  }
}
```

---

### 1.2 Spacing & Layout Tokens

```json
{
  "spacing": {
    "2xs": "2px",
    "xs": "4px",
    "sm": "8px",
    "md": "12px",
    "base": "16px",
    "lg": "20px",
    "xl": "24px",
    "2xl": "32px",
    "gutter": "20px",
    "header-height": "64px",
    "bottom-nav-height": "76px"
  }
}
```

---

### 1.3 Border Radius Tokens

```json
{
  "radii": {
    "xs": "6px",
    "sm": "10px",
    "md": "14px",
    "lg": "18px",
    "xl": "22px",
    "2xl": "26px",
    "sheet": "32px",
    "pill": "9999px",
    "full": "9999px"
  }
}
```

---

### 1.4 Typography Tokens

```json
{
  "typography": {
    "font-family": "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    "title-app": {
      "font-size": "24px",
      "font-weight": "700",
      "line-height": "28px",
      "letter-spacing": "-0.5px"
    },
    "section-title": {
      "font-size": "18px",
      "font-weight": "700",
      "line-height": "24px",
      "letter-spacing": "-0.25px"
    },
    "card-title": {
      "font-size": "16px",
      "font-weight": "600",
      "line-height": "22px"
    },
    "metric-large": {
      "font-size": "26px",
      "font-weight": "800",
      "line-height": "32px",
      "letter-spacing": "-0.5px"
    },
    "body-default": {
      "font-size": "15px",
      "font-weight": "500",
      "line-height": "22px"
    },
    "body-muted": {
      "font-size": "13px",
      "font-weight": "400",
      "line-height": "18px"
    },
    "button-text": {
      "font-size": "15px",
      "font-weight": "600",
      "line-height": "20px"
    },
    "tab-label": {
      "font-size": "11px",
      "font-weight": "600",
      "line-height": "14px"
    }
  }
}
```

---

## 2. Component Guidelines & Theme Parity Rules

1. **Card Layout & Geometry**:
   - Every card uses `border-radius: 22px` (or `26px` for header hero cards).
   - In **Light Mode**: background is `#ffffff` with a subtle `1px solid #e2e8f0` stroke and a soft ambient shadow.
   - In **Dark Mode**: background is `#131d31` / `#1e293b` with a crisp `1px solid #25334d` border and deep ambient shadow (`rgba(0,0,0,0.35)`).

2. **Input Fields & Search**:
   - Capsule rounded geometry (`border-radius: 9999px`) with 52px height.
   - Light: `#f8fafc` background, `#e2e8f0` border.
   - Dark: `#0f172a` background, `#27354f` border.
   - Focus ring: 2px solid `#10b981`.

3. **Bottom Navigation**:
   - Standardized 3-tab layout (**Todos**, **Profile**, **Settings**).
   - Active tab: `#10b981` (Emerald icon & text).
   - Inactive tab: `#64748b` (Light) / `#64748b` (Dark).

4. **Task Item States**:
   - Unchecked: 24×24px circle with 2px border, transparent interior.
   - Checked: `#10b981` fill with white checkmark icon, strikethrough text with 0.5 opacity.
   - Inline Editor: Capsule input with matching "Save" (emerald) and "Cancel" (muted) pill buttons.

5. **Voice Recording Modal**:
   - Top-rounded bottom sheet (`border-radius: 32px 32px 0 0`).
   - Waveform bars and pulsing microphone button in emerald `#10b981`.
   - Real-time transcript preview box with timer pill and bottom action trio.
