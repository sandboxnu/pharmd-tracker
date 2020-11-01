// const plugin = require("./plugins/type-system");
import { theme } from "twin.macro";

const plugin = require("tailwindcss/plugin");

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
      boxShadow: {
        cardLight:
          "0px 1px 2px rgba(0, 0, 0, 0.05), 0px 2px 13px rgba(0, 0, 0, 0.07),0px 3px 10px rgba(0, 0, 0, 0.03)",
        cardHeavy:
          "0px 8px 10px rgba(161, 167, 200, 0.2), 0px 16px 40px rgba(240, 244, 255, 0.5)"
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
  plugins: [
    // plugin(require("./plugins/type-system")(["responsive"]))
    ({ addUtilities }) => {
      const newUtilities = {
        ".fontStyle-12": {
          letterSpacing: -1.5,
          fontSize: 96,
          lineHeight: 112.5,
          fontFamily: "Montserrat"
          // color: Color.rgba(51, 51, 51, 1),
          // font: designFonts.Montserrat.SemiBold
        },
        ".fontStyle-11": {
          letterSpacing: 0,
          fontSize: 64,
          lineHeight: 75,
          fontFamily: "Montserrat"
          // color: Color.rgba(51, 51, 51, 1),
          // font: designFonts.Montserrat.Bold
        },
        ".fontStyle-10": {
          letterSpacing: 0,
          fontSize: 48,
          lineHeight: 56.25,
          fontFamily: "Montserrat"
          // color: Color.rgba(51, 51, 51, 1),
          // font: designFonts.Montserrat.SemiBold
        },
        ".fontStyle-9": {
          letterSpacing: 0.25,
          fontSize: 36,
          lineHeight: 20,
          fontFamily: "Montserrat"
          // color: Color.rgba(51, 51, 51, 1),
          // font: designFonts.Montserrat.Bold
        },
        ".fontStyle-8": {
          letterSpacing: 0.25,
          fontSize: 32,
          lineHeight: 20,
          fontFamily: "Inter"
          // color: Color.rgba(51, 51, 51, 1),
          // font: designFonts.Inter.Medium
        },
        ".fontStyle-7": {
          letterSpacing: 0.25,
          fontSize: 24,
          lineHeight: 36,
          fontFamily: "Inter"
          // color: Color.rgba(51, 51, 51, 1),
          // font: designFonts.Inter.SemiBold
        },
        ".fontStyle-6": {
          letterSpacing: 0.5,
          fontSize: 20,
          lineHeight: "20px",
          fontFamily: "Inter"
          // color: Color.rgba(51, 51, 51, 1),
          // font: designFonts.Inter.Medium
        },
        ".fontStyle-5": {
          letterSpacing: 0.5,
          fontSize: 18,
          lineHeight: 20,
          fontFamily: "Inter"
          // color: Color.rgba(51, 51, 51, 1),
          // font: designFonts.Inter.Bold
        },
        ".fontStyle-4": {
          letterSpacing: 0.25,
          fontSize: 16,
          lineHeight: 20,
          fontFamily: "Inter"
          // color: Color.rgba(51, 51, 51, 1),
          // font: designFonts.Inter.Regular
        },
        ".fontStyle-3": {
          letterSpacing: 0.315,
          fontSize: 14,
          lineHeight: 16.40625,
          fontFamily: "Inter"
          // color: Color.rgba(51, 51, 51, 1),
          // font: designFonts.Inter.SemiBold
        },
        ".fontStyle-2": {
          letterSpacing: 0.4000000059604645,
          fontSize: 12,
          lineHeight: 16,
          // color: Color.rgba(51, 51, 51, 1),
          // font: designFonts.Inter.Medium
          fontFamily: "Inter"
        },
        ".fontStyle-1": {
          letterSpacing: 1,
          fontSize: 10,
          lineHeight: 16,
          fontFamily: "Inter"
          // color: Color.rgba(51, 51, 51, 1),
          // font: designFonts.Inter.Regular
        }
      };

      addUtilities(newUtilities);
    }
  ]
};
