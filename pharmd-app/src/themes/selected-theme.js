import createDarkTheme from "./dark-theme";
import createLigthTheme from "./light-theme";

function selectTheme(ds, theme) {
	switch (theme) {
		case "dark":
			return createDarkTheme(ds);
		default:
			return createLigthTheme(ds);
	}
}

export default selectTheme;
