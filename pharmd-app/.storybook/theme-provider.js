import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
// import { Diez, DesignLanguage } from "diez-dashboard";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
// import selectTheme from "../src/themes/selected-theme";

const ThemeProvider = ({ theme, children }) => {
	const nextTheme = Object.assign({}, theme);

	console.log(nextTheme);
	var d = document.documentElement;
	if (nextTheme.name === "Dark Theme") {
		d.classList.add("theme-dark");
	} else if (nextTheme.name === "Light Theme") {
		d.classList.remove("theme-dark");
	}

	// const diez = new Diez(DesignLanguage);

	// useEffect(() => {
	// 	// Observing updates to the design langauge in FIgma.
	// 	// Passed an empty array to make sure hook only runs when mounted
	// 	diez.attach(setDs);
	// }, []);

	// if (typeof ds === "undefined") {
	// 	return null;
	// } else {
	// 	console.log("Diez", ds);
	// }
	// console.log("THEME", nextTheme.name);
	// var themey = selectTheme(
	// 	ds,
	// 	nextTheme.name === "Dark Theme" ? "dark" : "ligth"
	// );
	// console.log("UPDATED THEME", themey);

	return (
		<StylesProvider injectFirst>
			<StyledThemeProvider theme={nextTheme}>
				<MuiThemeProvider theme={nextTheme}>
					<CssBaseline />
					{children}
				</MuiThemeProvider>
			</StyledThemeProvider>
		</StylesProvider>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
	theme: PropTypes.object.isRequired
};

export default ThemeProvider;
