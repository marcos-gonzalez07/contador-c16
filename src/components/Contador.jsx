const Contador = () => {
    return (
        <section className="text-center">
            <h2>Contador</h2>
            <div className="d-flex justify-content-center">
                <button className = "btn btn-primary">+</button>
                <p className = "fs-3 mx-3">1</p>
                <button className = "btn btn-danger">-</button>
            </div>
        </section>
    );
};

export default Contador;