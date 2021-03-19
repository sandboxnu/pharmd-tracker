import { createMuiTheme } from "@material-ui/core/styles";

const STYLE = getComputedStyle(document.body);
function getValue(cssVariable) {
  return STYLE.getPropertyValue(cssVariable).trim();
}

export const FIELD_COLOR_NAMES = {
  PRIMARY: "PRIMARY",
  GREEN: "GREEN",
  RED: "RED",
  ORANGE: "ORANGE",
  TERTIARY: "TERTIARY",
  DEFAULT: "DEFAULT"
};

export const FIELD_COLOR_VALUES = {
  [FIELD_COLOR_NAMES.PRIMARY]: getValue("--primary"),
  [FIELD_COLOR_NAMES.GREEN]: getValue("--green-2"),
  [FIELD_COLOR_NAMES.RED]: getValue("--red"),
  [FIELD_COLOR_NAMES.ORANGE]: getValue("--orange"),
  [FIELD_COLOR_NAMES.TERTIARY]: getValue("--tertiary"),
  [FIELD_COLOR_NAMES.DEFAULT]: getValue("--gray-3")
};

function createLightTheme() {
  const overrides = {
    name: "Light Theme",
    palette: {
      fieldColors: {
        ...FIELD_COLOR_VALUES
      },
      primary: {
        main: getValue("--primary"),
        contrastText: getValue("--white")
      },
      secondary: {
        main: getValue("--secondary"),
        contrastText: getValue("--white")
      },
      tertiary: {
        main: getValue("--tertiary"),
        contrastText: getValue("--white")
      },
      error: {
        main: getValue("--red")
      },
      warning: {
        main: getValue("--orange")
      },
      info: {
        main: getValue("--primary")
      },
      good: {
        main: getValue("--yellow")
      },
      success: {
        main: getValue("--green-2")
      },
      neutral: {
        main: getValue("--gray-3")
      },
      text: {
        primary: getValue("--gray-1"),
        secondary: getValue("--gray-3"),
        hint: getValue("--gray-4")
      },
      background: {
        paper: getValue("--white"),
        default: getValue("--background")
      }
    }
  };
  const theme = createMuiTheme(overrides);
  return theme;
}

export default createLightTheme;
