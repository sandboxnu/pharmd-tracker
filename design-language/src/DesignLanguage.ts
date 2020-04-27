import { Margin } from "./components/Margin";
import { designTokens, designFonts } from "./designs/Design.figma";
/**
 * You can collect anything inside a Diez component. Design tokens specified as
 * properties will be made available in the SDKs transpiled with Diez.
 */
const colors = {
  white: designTokens.colors.white,
  black: designTokens.colors.gray1,
  gray2: designTokens.colors.gray2,
  gray3: designTokens.colors.gray3,
  gray4: designTokens.colors.gray4,
  gray5: designTokens.colors.gray5,
  gray6: designTokens.colors.gray6,
  red: designTokens.colors.red,
  orange: designTokens.colors.orange,
  yellow: designTokens.colors.yellow,
  green1: designTokens.colors.green1,
  green2: designTokens.colors.green2,
  green3: designTokens.colors.green3,
  primary: designTokens.colors.primary,
  secondary: designTokens.colors.secondary,
  tertiary: designTokens.colors.tertiary,
  primaryLigth: designTokens.colors.background,
};

/**
 * You can reference properties from other components.
 */
const palette = {
  // Backgrounds
  background: colors.primaryLigth,
  cardBackground: colors.white,
  tooltipBackground: colors.gray3,
  // Text
  textPrimary: colors.black,
  textSecondary: colors.gray3,
  textTertiary: colors.gray4,
  textDarkContrast: colors.white,
  textHighEmphasis: colors.primary,
  textLowEmphasis: colors.secondary,

  //Colors
  primaryColor: colors.primary,
  primaryColorLigth: colors.primaryLigth,
  secondaryColor: colors.secondary,
  tertiaryColor: colors.tertiary,
  redColor: colors.red,
  orangeColor: colors.orange,
  yellowColor: colors.yellow,
  greenColor: colors.green2,
};

/**
 * All of rich language features of TypeScript are at your disposal; for example,
 * you can define an object to keep track of your fonts.
 */
const Fonts = { ...designFonts };

/**
 * Typographs encapsulate type styles with support for a specific font, font size,
 * and color. More typograph properties are coming soon.
 */
// const typography = {...designTokens.typography};

/**
 * In addition to colors and typography, you can also collect other types of
 * design language primitives in components as well — such as images, icons &
 * animations.
 */
const images = {
  // logo: Image.responsive('assets/logo.png', 52, 48),
  // masthead: Image.responsive('assets/masthead.png', 208, 88)
};

/**
 * You can even collect your own custom components.
 */
const layoutValues = {
  spacingSmall: 8,
  spacingMedium: 32,
  spacingLarge: 64,
  contentMargin: new Margin({
    top: 40,
    left: 10,
    right: 10,
    bottom: 10,
  }),
};

// Used to create a string of the font families use in the application
// This is used to ensure that the proper fonts are loaded by the browser
function getFontFamilies() {
  let fonts = new Set();
  // Add all fonts
  Object.values(designFonts).forEach((val) =>
    Object.values(val).forEach((val) => fonts.add(val.name))
  );

  // Convert To String
  let fontsString = `'${[...fonts].join("', '")}'`;
  return `${fontsString}, sans-serif`;
}

/**
 * You can also define strings.
 */
const strings = {
  title: "Diez",
  caption: "Keep your designs in sync with code",
  helper: "Please Modify the contents of “src/DesignLanguage.ts”.",
  fontFamilies: getFontFamilies(),
};

const shadows = {
  ...designTokens.shadows,
};

export const designLanguage = {
  palette,
  typography: designTokens.typography,
  images,
  layoutValues,
  strings,
  shadows,
  // loadingAnimation: Lottie.fromJson('assets/loadingAnimation.json', false),
};
