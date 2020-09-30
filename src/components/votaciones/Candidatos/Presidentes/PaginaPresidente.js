import React, {useState, useEffect} from 'react';
import ListadoPresidentes from './ListadoPresidentes';
import Buscador from './../../../pageComponents/Buscador'

const PaginaPresidente = () => {

    const [presidentes, guardarPresidentes ] = useState([]);

    useEffect(() => {
        const consultarApi = async () => {
            const url="http://demo2879786.mockable.io/elecciones-ecuador-2021"

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            guardarPresidentes(resultado.hits);

            /*const jumbotron = document.querySelector('.jumbotron');
            jumbotron.scrollIntoView({ behavior: 'smooth'});*/
        }
        consultarApi();
    }, []);
    
    
    return ( 
        <div className="container">
        
            <div className="headerActa">
                <h1 htmlFor="votaciones" style={{fontSize: "3rem"}} className="text-center">Candidatos a la presidencia</h1>
                <Buscador />
                <br/>
            </div>
        
        <div className="row justify-content-center">
          <ListadoPresidentes
          />
   
        </div>
      </div>
     );
}
 
export default PaginaPresidente;