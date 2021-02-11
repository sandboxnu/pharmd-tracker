// Generate Typescale
function getTypeScale() {
  let types = {};
  // TO DO: Currently we have 12 font styles, yet we might add more in the future
  // Create a function that retrieves the unique number of Font Style css variables

  for (let i = 1; i <= 12; i++) {
    types[`.fontStyle-${i}`] = {
      fontSize: `var(--font-style-${i}-font-size)`,
      fontFamily: `var(--font-style-${i}-font-family)`,
      fontStyle: `var(--font-style-${i}-font-style)`,
      letterSpacing: `var(--font-style-${i}-letter-spacing)`,
      lineHeight: `var(--font-style-${i}-line-height)`
    };
  }

  return types;
}

const customTypeStyles = {};

module.exports = function(variants) {
  return function({ addUtilities }) {
    addUtilities(
      {
        ...getTypeScale(),
        ...customTypeStyles
      },
      variants
    );
  };
};
