module.exports = {
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem"
    },
    fontFamily: {
      sans: ["Inter"]
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        background: "var(--color-bg-primary)",
        paper: "var(--color-bg-card)"
      },
      spacing: {
        "18": "4.5rem",
        "28": "7rem",
        "99": "24.75rem"
      },
      borderRadius: {
        xl: "1rem"
      },
      inset: {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem"
      }
    }
  },
  variants: {},
  plugins: [require("./plugins/type-system")(["responsive"])]
};