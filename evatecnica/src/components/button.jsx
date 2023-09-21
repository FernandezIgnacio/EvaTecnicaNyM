const cursos = [
  {
    id: 1,
    nombreCurso: "Programacion Basica",
    descripcion: "Aprende los conceptos basicos de programacion",
    nombreCat: "Informatica",
  },
];

export function Boton({ text, name }) {
  return (
    <button>
      {text} - {name}
    </button>
  );
}
