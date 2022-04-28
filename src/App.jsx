import { useState } from "react";

function App() {
  const [inputState, setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",
  });

  const handleInputChange = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };

  const handleResetChange = () => {
    setInputState({
      ...inputState,
      titulo: "",
      fecha: "",
      nota: "",
    });
    console.log(handleResetChange);
  };

  let arregloNotas = JSON.parse(localStorage.getItem("notas")) || [];

  const handleClickGuardar = () => {
    arregloNotas.push(inputState);
    localStorage.setItem("notas", JSON.stringify(arregloNotas));
    handleResetChange();
  };

  return (
    <div className="App container">
      <div className="row  ">
        <div className="row">
          <div className="col p-4">
            <h3 className="text-center">Lista</h3>
            {arregloNotas.length === 0 ?
              "Al momento no tienes notas guardadas. Puedes crear una en el formulario contiguo"
            :
            (
              <ol>
                {arregloNotas.map((item)=>{
                  return (
                    <li>
                      {item.titulo} ({item.fecha}) ({item.nota})
                    </li>
                  )
                })}
              </ol>
            )
            }

            {/* {arregloNotas.length !== 0 &&(
              <ol>
                {arregloNotas.map((item)=>{
                  return (
                    <li>
                      {item.titulo} ({item.fecha}) ({item.nota})
                    </li>
                  )
                })}
              </ol>
            )} */}
          </div>
          <div className="col text-center mx-auto p-4">
            <h3>Notas</h3>
            <label className="mb-2" style={{ width: "100%" }}>
              Titulo
              <input
                id="titulo"
                name="titulo"
                type="text"
                style={{ width: "100%" }}
                onChange={handleInputChange}
                value={inputState.titulo}
              />
            </label>
            <br></br> <br />
            <label className="mb-2  " style={{ width: "100%" }}>
              Fecha
              <input
                id="fecha"
                name="fecha"
                type="date"
                style={{ width: "100%" }}
                onChange={handleInputChange}
                value={inputState.fecha}
              />
            </label>
            <br></br>
            <br />
            <label style={{ width: "100%" }}>
              Nota
              <input
                id="nota"
                name="nota"
                type="text"
                style={{ width: "100%" }}
                onChange={handleInputChange}
                value={inputState.nota}
              />
            </label>
            <hr />
            <div className="ms-2 me-2 mt-2 row">
              <div className="col">
                <span className="row mx-1">
                  <button
                    type="button"
                    className="btn btn-primary mx-2 "
                    onClick={handleResetChange}
                    style={{ marginLeft: "15px" }}
                  >
                    Borrar
                  </button>
                </span>
              </div>

              <div className="col">
                <span className="row mx-1">
                  <button
                    type="button"
                    className="btn btn-primary mx-2 "
                    onClick={handleClickGuardar}
                    style={{ marginLeft: "15px" }}
                  >
                    Guardar
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <center>
          <hr />
          <br />
          <img
            src="https://1.bp.blogspot.com/-JOCWKg_-5EE/YDcZSvO_eQI/AAAAAAAAqY8/3gqUC3SRawQgP9nK3tS5U0-isOEiO15hQCLcBGAsYHQ/w1200-h630-p-k-no-nu/Episodios-Horimiya-Relleno-Orden-Cronologico.jpgD"
            width={550}
            alt=""
          />
        </center>
        <center>
          <br /> <hr />
          <h1>Paulo Londra: Bzrp Music Sessions, Vol. 23</h1>
          <a href="https://genius.com/Bizarrap-and-paulo-londra-paulo-londra-bzrp-music-sessions-vol-23-lyrics">
            <img
              src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/RWYTWE3BRZDKFJLZO7DYPMQGHU.jpg"
              width={550}
              alt=""
              href=" "
            />
          </a>
        </center>
        <br />
      </div>
    </div>
  );
}

export default App;
