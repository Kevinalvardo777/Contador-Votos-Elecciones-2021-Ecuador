import React, {useState, useEffect} from 'react';
import ListadoPresidentes from './ListadoPresidentes';
import Buscador from './../../../pageComponents/Buscador'
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
                <h1 htmlFor="votaciones" style={{fontSize: "3rem", color: "#9C9F9F"}} className="text-center">Candidatos a la presidencia</h1>
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