import React from 'react';
import {Link} from 'react-router-dom';

const Acta = () => {
    return ( 
        <div className="container">
            <div className="headerActa">
                <h1 htmlFor="votaciones" className="text-center" style={{color: "#9C9F9F "}}>Actas</h1>
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
                            <Link to={"/asambleistas"} className="enlace-cuenta-acta">
                                Asambleistas
                            </Link>
                    </div>
                </div>
           </div>
           <div className="row">
                <div className="col-6 mx-auto">
                    <div className="listaProp">
                            <Link to={"/presidentes"} className="enlace-cuenta-acta">
                                Alcaldes
                            </Link>
                    </div>
                </div>
           </div>
           <div className="row">
                <div className="col-6 mx-auto">
                    <div className="listaProp">
                            <Link to={"/presidentes"} className="enlace-cuenta-acta">
                                Prefectos
                            </Link>
                    </div>
                </div>
           </div>
        </div>
     );
}
 
export default Acta;