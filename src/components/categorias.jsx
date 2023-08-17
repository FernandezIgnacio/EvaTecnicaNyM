import PropTypes from "prop-types";

Categorias.propTypes = {
  title: PropTypes.string,
};

const cat = [
  {
    id: 1,
    nombreCat: "Informatica",
  },
  {
    id: 2,
    nombreCat: "Cocina",
  },
];

export function Categorias() {
  cat.map((cat, i) => {
    return <option key={i}>{cat.nombreCat}</option>;
  });
}
