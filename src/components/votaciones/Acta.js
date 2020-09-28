import React from 'react';
import {Link} from 'react-router-dom';

const Acta = () => {
    return ( 
        <div className="container">
            <div className="jumbotron">
                <h1 htmlFor="votaciones" className="text-center" >Actas</h1>
            
            </div>
            <div className="row">
                <div className="col-6 mx-auto">
                    <div className="listaProp">
                            <Link to={"/presidentes"} className="enlace-cuenta-acta" >
                                Presidentes
                            </Link>
                    </div>
                </div>
           </div>
           <div className="row">
                <div className="col-6 mx-auto">
                    <div className="listaProp">
                            <Link to={"/presidentes"} className="enlace-cuenta-acta">
                                Asambleistas
                            </Link>
                    </div>
                </div>
           </div>
        </div>
     );
}
 
export default Acta;