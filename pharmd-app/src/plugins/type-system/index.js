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