const diez = require("diez-pharmd-design");

const ds = new diez.Diez(diez.DesignLanguage).component;

function getTypeScale() {
  let keys = Object.keys(ds.typography);
  let types = {};
  Object.values(ds.typography).forEach((type, index) => {
    let fontStyle = `.${keys[index]}`.replace(".fontStyle", ".fontStyle-");
    types[fontStyle] = { ...type.style };
  });
  return types;
}

const customTypeStyles = {
  ".fontStyle-6": {
    letterSpacing: 0.5,
    fontSize: 20,
    lineHeight: 20
    // color: Color.rgba(51, 51, 51, 1),
    // font: designFonts.Inter.Medium
  }
};

module.exports = function(variants) {
  return function({ addUtilities }) {
    addUtilities(
      {
        ...getTypeScale(),
        // ...customTypeStyles
        ".fontStyle-12": {
          letterSpacing: -1.5,
          fontSize: 96,
          lineHeight: 112.5,
          fontFamily: "Montserrat",
          //Remove below
          backgroundColor: "#f00000"
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
        ".fontStyle-6": {
          letterSpacing: 0.5,
          fontSize: 20,
          lineHeight: "20px",
          fontFamily: "Inter"
        }
      },
    //   getTypeScale(),
      variants
    );
  };
};
