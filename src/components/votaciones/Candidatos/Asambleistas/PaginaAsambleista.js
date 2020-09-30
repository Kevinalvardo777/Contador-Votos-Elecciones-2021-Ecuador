import React, {useState, useEffect} from 'react';
import ListadoAsambleistas from './ListadoAsambleistas';
import Buscador from './../../../pageComponents/Buscador'

const PaginaAsambleista = () => {

    const [asambleistas, guardarAsambleistas ] = useState([]);

    useEffect(() => {
        const consultarApi = async () => {
            const url="http://demo2879786.mockable.io/elecciones-ecuador-2021"

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            guardarAsambleistas(resultado.hits);

            /*const jumbotron = document.querySelector('.jumbotron');
            jumbotron.scrollIntoView({ behavior: 'smooth'});*/
        }
        consultarApi();
    }, []);
    
    
    return ( 
        <div className="container">
        
            <div className="headerActa">
                <h1 htmlFor="votaciones" style={{fontSize: "3rem"}} className="text-center">Candidatos a la Asamblea Nacional</h1>
                <Buscador />
                <br/>
            </div>
        
        <div className="row justify-content-center">
          <ListadoAsambleistas
          />
   
        </div>
      </div>
     );
}
 
export default PaginaAsambleista;