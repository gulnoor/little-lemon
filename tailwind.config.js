/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "var(--md-sys-color-primary)",
        "on-primary": " var(--md-sys-color-on-primary)",
        "primary-container": " var(--md-sys-color-primary-container)",
        "on-primary-container": " var(--md-sys-color-on-primary-container)",
        "primary-fixed": " var(--md-sys-color-primary-fixed)",
        "on-primary-fixed": " var(--md-sys-color-on-primary-fixed)",
        "primary-fixed-dim": " var(--md-sys-color-primary-fixed-dim)",
        "on-primary-fixed-variant":
          " var(--md-sys-color-on-primary-fixed-variant)",
        secondary: " var(--md-sys-color-secondary)",
        "on-secondary": " var(--md-sys-color-on-secondary)",
        "secondary-container": " var(--md-sys-color-secondary-container)",
        "on-secondary-container": " var(--md-sys-color-on-secondary-container)",
        "secondary-fixed": " var(--md-sys-color-secondary-fixed)",
        "on-secondary-fixed": " var(--md-sys-color-on-secondary-fixed)",
        "secondary-fixed-dim": " var(--md-sys-color-secondary-fixed-dim)",
        "on-secondary-fixed-variant":
          " var(--md-sys-color-on-secondary-fixed-variant)",
        tertiary: " var(--md-sys-color-tertiary)",
        "on-tertiary": " var(--md-sys-color-on-tertiary)",
        "tertiary-container": " var(--md-sys-color-tertiary-container)",
        "on-tertiary-container": " var(--md-sys-color-on-tertiary-container)",
        "tertiary-fixed": " var(--md-sys-color-tertiary-fixed)",
        "on-tertiary-fixed": " var(--md-sys-color-on-tertiary-fixed)",
        "tertiary-fixed-dim": " var(--md-sys-color-tertiary-fixed-dim)",
        "on-tertiary-fixed-variant":
          " var(--md-sys-color-on-tertiary-fixed-variant)",
        error: " var(--md-sys-color-error)",
        "error-container": " var(--md-sys-color-error-container)",
        "on-error": " var(--md-sys-color-on-error)",
        "on-error-container": " var(--md-sys-color-on-error-container)",
        background: " var(--md-sys-color-background)",
        "on-background": " var(--md-sys-color-on-background)",
        outline: " var(--md-sys-color-outline)",
        "inverse-on-surface": " var(--md-sys-color-inverse-on-surface)",
        "inverse-surface": " var(--md-sys-color-inverse-surface)",
        "inverse-primary": " var(--md-sys-color-inverse-primary)",
        shadow: " var(--md-sys-color-shadow)",
        "surface-tint": " var(--md-sys-color-surface-tint)",
        "outline-variant": " var(--md-sys-color-outline-variant)",
        scrim: " var(--md-sys-color-scrim)",
        surface: " var(--md-sys-color-surface)",
        "on-surface": " var(--md-sys-color-on-surface)",
        "surface-variant": " var(--md-sys-color-surface-variant)",
        "on-surface-variant": " var(--md-sys-color-on-surface-variant)",
        "surface-container-highest":
          " var(--md-sys-color-surface-container-highest)",
        "surface-container-high": " var(--md-sys-color-surface-container-high)",
        "surface-container": " var(--md-sys-color-surface-container)",
        "surface-container-low": " var(--md-sys-color-surface-container-low)",
        "surface-container-lowest":
          " var(--md-sys-color-surface-container-lowest)",
        "surface-dim": " var(--md-sys-color-surface-dim)",
        "surface-bright": " var(--md-sys-color-surface-bright)",
      },
    },
  },
  plugins: [],
};
