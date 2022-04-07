import { useState } from "react"

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
    nota: ""
  });
  console.log(handleResetChange);
  };

  return (
    <div className="App">
      <h3>Notas</h3>
      <label htmlfor = "titulo">Titulo</label>
      <input 
        id = "titulo" 
        name = "titulo" 
        type = "text" 
        onChange = {handleInputChange}
        value = {inputState.titulo}
      />
      <br></br> <br />
      <label htmlfor = "fecha">Fecha</label>
      <input 
        id = "fecha"
        name = "fecha" 
        type = "text" 
        onChange = {handleInputChange}
        value = {inputState.fecha}
      />
      <br></br><br />
      <label htmlfor = "nota">Nota</label>
      <input 
        id = "nota" 
        name = "nota" 
        type = "text" 
        onChange = {handleInputChange}
        value = {inputState.nota}
      />
<br /><br />
      <center>
        <button
          type="button" 
          className="btn btn-primary mx-2" 
          onClick={handleResetChange}
          style={{marginLeft:"15px"}}
        >Borrar
    </button>
      </center>
    <br />
    <center>
      <img src="https://1.bp.blogspot.com/-JOCWKg_-5EE/YDcZSvO_eQI/AAAAAAAAqY8/3gqUC3SRawQgP9nK3tS5U0-isOEiO15hQCLcBGAsYHQ/w1200-h630-p-k-no-nu/Episodios-Horimiya-Relleno-Orden-Cronologico.jpgD" width={550} alt="" />
    </center>

    </div>
  );
}

export default App;
