const Conceptos = (props) => {
  return (
    <section>
      <h2>conceptos de react</h2>
      <p>
        uno de los conceptos clave de React son los componentes. Un componente
        es una pieza reutilizable de la interfaz de usuario que se encarga de
        representar una parte específica de la pantalla. Los componentes pueden
        ser tan simples como un botón o tan complejos como un formulario
        completo. React permite la creación de componentes tanto de clase como
        funcionales, aunque los componentes funcionales se han vuelto más
        populares con la introducción con los Hooks. Cada componente en react
        puede tener su propio{" "}
        <strong>estado (state) y propiedades (props)</strong> . El estado es una
        forma de almacenar y manejar datos internos del componente, mientras que
        las propiedades son datos que se pasan de un componente padre a un
        componente hijo. Al combinar estos elementos, React permite la creación
        de interfaces interactivas,donde los cambios en los datos se reflejan
        automáticamente en la interfaz de usuario.
      </p>
      <div className="alert alert-info" role="alert">
        Comisión: {props.codComision}
      </div>
    </section>
  );
};

export default Conceptos;
