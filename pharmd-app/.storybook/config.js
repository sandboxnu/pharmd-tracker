import { addDecorator, configure } from "@storybook/react";

import { withThemesProvider } from "storybook-addon-styled-component-theme";
import ThemeProvider from "./theme-provider";

import createLigthTheme from "../src/themes/light-theme";
import createDarkTheme from "../src/themes/dark-theme";

import "../src/styles/App.css";

const themes = [createLigthTheme(), createDarkTheme()];
addDecorator(withThemesProvider(themes, ThemeProvider));

configure(require.context("../src/stories", true, /\.stories\.js$/), module);
// stories: ['../src/**/*.stories.js'],
// addons: [
//   '@storybook/preset-create-react-app',
//   '@storybook/addon-actions',
//   '@storybook/addon-links',
// ],
