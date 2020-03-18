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
        primary: "var(--color-bg-primary)",
        secondary: "#5c6ac4",
        neutral: "#5c6ac4"
      },
      spacing: {
        "18": "4.5rem",
        "28": "7rem",
        "99": "24.75rem"
      }
    }
  },
  variants: {},
  plugins: [require("./plugins/type-system")(["responsive"])]
};
