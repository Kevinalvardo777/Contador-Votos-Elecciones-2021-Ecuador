import React, {useState, useEffect} from 'react';
import Presidente from './Presidente'

const ListadoPresidentes = () => {
    const [presidentes, guardarPresidentes ] = useState([]);

    useEffect(() => {
        const consultarApi = async () => {
            const url="http://demo2879786.mockable.io/elecciones-ecuador-2021"

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            guardarPresidentes(resultado.hits);

            const jumbotron = document.querySelector('.jumbotron');
            jumbotron.scrollIntoView({ behavior: 'smooth'});
        }
        consultarApi();
    }, []);
    
    return ( 
        <div className="col-12 p-3 row">
            {presidentes.map(presidente =>(
                <Presidente />
                
            ))

            }
        </div>
     );
}
 
export default ListadoPresidentes;