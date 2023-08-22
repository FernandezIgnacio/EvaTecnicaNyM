import PropTypes from "prop-types";

Categorias.propTypes = {
  title: PropTypes.string,
};
export function Categorias({ title }) {
  console.log(title);

  return <h3>{title}</h3>;
}