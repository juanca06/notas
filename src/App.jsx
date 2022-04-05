
import { useState } from "react";

function App() {

  const [inputState, setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",
  });
 

  const handleInputChange = (event) => { 
  // console.log(event.target); 
    setInputState ({ 
      ...inputState,
      [event.target.name]: event.target.value
    });
   
   };


  return (
    <div className="App m-4">
      
        <h1>Notas</h1>
        <label htmlFor="titulo" className="pe-4">Titulo </label> 
        <input 
        id="titulo" 
        name="titulo" 
        type="text" 
        onChange={handleInputChange} 
        value={inputState.titulo}
        />
        <br/><br/>

        <label htmlFor="fecha" className="pe-4">Fecha </label> 
        <input 
        id="fecha" 
        name="fecha" 
        type="text" 
        onChange={handleInputChange} 
        value={inputState.fecha} 
        />
        <br/><br/>

      <label htmlFor="nota" className="pe-4">Nota</label> 
        <input 
        id="nota" 
        name="nota" 
        type="text" 
        onChange={handleInputChange} 
        value={inputState.nota}
        />
        <br/>
        <br/>
        

        <center>
          <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2021/08/genshin-impact-baal-2450371.jpg?itok=k0Sz5OGv" height={250} alt="" />
        </center>
        <style>{'body { background-color:  #d8c4ff  ; }'}</style>

    </div>
  );
}

export default App;
