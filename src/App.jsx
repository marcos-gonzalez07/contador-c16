import Conceptos from "./components/Conceptos";
import Contador from "./components/Contador";
import Teoria from "./components/Teoria";

function App() {
  // aquí iria la lógica del componente
  const codComision = "web16 2025 módulo 2";
  return (
    // aqui también puedo agregar lógica, no es normal pero se puede agregar algo pequeño
    <>
      <header className="py-3 text-center">
        <h1 className="display-4">primera app con react</h1>
      </header>
      <main className="container">
        <Teoria></Teoria>
        {/* <Teoria></Teoria> */}
        <Conceptos
          codComision={codComision}
          tema={"react"}
          version={19}
        ></Conceptos>
        <Contador></Contador>
      </main>
    </>
  );
}

export default App;
