import React, {useState} from 'react';
import "./styles.css"

function App() {

  let [value, setValue] = useState(0);

  const restar = () => {
    if (value > 0)
    setValue(--value)
  }

  const sumar = () => {
    setValue(++value)
  }

  const resetear = () => {
    setValue(0)
  }

  return (
    <div className="App">
      <h1>Votaciones Partido Creo</h1>
      <img src="https://pbs.twimg.com/media/A7I_mNsCIAAYO5h.jpg"  className="image" alt="Lasso-creo"/>
      <div className="wrapper">
        
        <button onClick={restar}>-</button>
        <div>{value}</div>
        <button onClick={sumar}>+</button>
      </div>
      <button className="reset" onClick={resetear}>Reiniciar</button>
    </div>
   
  );
}

export default App;
