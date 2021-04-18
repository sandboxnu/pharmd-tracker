module.exports = {
  theme: {
    fontFamily: {
      sans: ["Inter"]
    },
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
      "7xl": "5rem",
      "80%": "80%"
    },
    extend: {
      animation: {
        grow: "grow 2s linear",
        shrink: "grow 3s linear reverse"
      },
      backgroundColor: {
        primary: "var(--color-primary)"
      },
      borderRadius: {
        xl: "1rem",
        "7px": "7px"
      },
      boxShadow: {
        cardLight:
          "0px 1px 2px rgba(0, 0, 0, 0.05), 0px 2px 13px rgba(0, 0, 0, 0.07),0px 3px 10px rgba(0, 0, 0, 0.03)",
        cardHeavy:
          "0px 8px 10px rgba(161, 167, 200, 0.2), 0px 16px 40px rgba(240, 244, 255, 0.5)"
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        background: "var(--color-background)",
        paper: "var(--color-white)"
      },
      fontSize: {
        "1.1": "1.1rem"
      },
      fontWeight: {
        "650": "650"
      },
      height: {
        "60px": "60px",
        "250px": "250px"
      },
      inset: {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "12": "3rem",
        "10px": "10px"
      },
      keyframes: {
        grow: {
          "0%": { height: "0%" },
          "100%": { height: "50%" }
        }
      },
      lineHeight: {
        "60px": "60px"
      },
      margin: {
        "25px": "25px",
        "100px": "100px"
      },
      padding: {
        "16px": "16px"
      },
      spacing: {
        "96px": "96px",
        "18": "4.5rem",
        "28": "7rem",
        "99": "24.75rem"
      },
      textColor: {
        inverse: "var(--color-text-inverse)"
      },
      width: {
        "60px": "60px",
        fitContent: "fit-content"
      },
      zIndex: {
        max: 99999
      }
    }
  },
  variants: {},
  // plugins: [require("./plugins/type-system")(["responsive"])]
  plugins: [
    // plugin(["responsive"])
    ({ addUtilities }) => {
      const newUtilities = {
        ".fontStyle-12": {
          letterSpacing: -1.5,
          fontSize: 96,
          lineHeight: "112.5px",
          color: "#333333",
          fontFamily: "Montserrat"
        },
        ".fontStyle-11": {
          letterSpacing: 0,
          fontSize: 64,
          lineHeight: "75px",
          color: "#333333",
          fontFamily: "Montserrat"
        },
        ".fontStyle-10": {
          letterSpacing: 0,
          fontSize: 48,
          lineHeight: "56.25px",
          color: "#333333",
          fontFamily: "Montserrat"
        },
        ".fontStyle-9": {
          letterSpacing: 0.25,
          fontSize: 36,
          lineHeight: "20px",
          color: "#333333",
          fontFamily: "Montserrat"
        },
        ".fontStyle-8": {
          letterSpacing: 0.25,
          fontSize: 32,
          lineHeight: "20px",
          color: "#333333",
          fontFamily: "Inter"
        },
        ".fontStyle-7": {
          letterSpacing: 0.25,
          fontSize: 24,
          lineHeight: "36px",
          color: "#333333",
          fontFamily: "Inter"
        },
        ".fontStyle-6": {
          letterSpacing: 0.5,
          fontSize: 20,
          color: "#333333",
          lineHeight: "20px",
          fontFamily: "Inter"
        },
        ".fontStyle-5": {
          letterSpacing: 0.5,
          fontSize: 18,
          lineHeight: "20px",
          fontFamily: "Inter"
        },
        ".fontStyle-4": {
          letterSpacing: 0.25,
          fontSize: 16,
          lineHeight: "20px",
          color: "#333333",
          fontFamily: "Inter"
        },
        ".fontStyle-3": {
          letterSpacing: 0.315,
          fontSize: 14,
          lineHeight: "16.40625px",
          color: "#333333",
          fontFamily: "Inter"
        },
        ".fontStyle-2": {
          letterSpacing: 0.4000000059604645,
          fontSize: 12,
          lineHeight: "16px",
          color: "#333333",
          fontFamily: "Inter"
        },
        ".fontStyle-1": {
          letterSpacing: 1,
          fontSize: 10,
          lineHeight: "16px",
          color: "#333333",
          fontFamily: "Inter"
        },
        ".transition-1": {
          transition: "all cubic-bezier(0.4, 0, 0.6, 1) 0.195s"
        },
        ".paperStyle": {
          height: "252px",
          borderRadius: "16px",
          boxShadow:
            "0px 1px 2px rgba(0,0,0,0.05), 0px 2px 13px rgba(0,0,0,0.07), 0px 3px 10px rgba(0,0,0,0.03)"
        }
      };

      addUtilities(newUtilities);
    }
  ]
};
