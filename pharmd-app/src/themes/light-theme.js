import { createMuiTheme } from "@material-ui/core/styles";

// Helper Function used to retrieve css variable values
const STYLE = getComputedStyle(document.body);
function getValue(cssVariable) {
  return STYLE.getPropertyValue(cssVariable).trim();
}

function createLigthTheme() {
  const overridings = {
    name: "Light Theme",
    palette: {
      pillColors: {
        coop: getValue("--primary"),
        enrolled: getValue("--green-2"),
        dropback: getValue("--red"),
        leave: getValue("--orange"),
        graduated: getValue("--tertiary"),
        na: getValue("--gray-3")
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
>>>>>>> develop
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
  return createMuiTheme(overridings);
}

export default createLigthTheme;
