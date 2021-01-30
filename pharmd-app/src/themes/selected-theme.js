import createDarkTheme from "./dark-theme";
import createLigthTheme from "./light-theme";

function selectTheme(theme) {
  switch (theme) {
    case "dark":
      return createDarkTheme();
    default:
      return createLigthTheme();
  }
}

export default selectTheme;
