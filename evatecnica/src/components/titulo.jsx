import PropTypes from "prop-types";

Titulo.propTypes = {
  name: PropTypes.string,
};

export function Titulo({ name }) {
  return <h1>{name}</h1>;
}
