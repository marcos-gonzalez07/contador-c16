import Teoria from "./components/Teoria";

function App() {
  // aquí iria la lógica del componente
  return (
    // aqui también puedo agregar lógica, no es normal pero se puede agregar algo pequeño
    <>
      <header className="py-3 text-center">
        <h1 className="display-4">primera app con react</h1>
      </header>
      <main className = "container">
        <Teoria></Teoria>
        {/* <Teoria></Teoria> */}
      </main>
    </>
  );
}

export default App;
