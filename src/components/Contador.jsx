const Contador = () => {
let numero = 1

const sumar = () =>{
    numero++
    console.log(numero)

}
    return (
        <section className="text-center">
            <h2>Contador</h2>
            <div className="d-flex justify-content-center">
                <button className = "btn btn-primary" onClick={sumar}>+</button>
                <p className = "fs-3 mx-3">{numero}</p>
                <button className = "btn btn-danger">-</button>
            </div>
        </section>
    );
};

export default Contador;