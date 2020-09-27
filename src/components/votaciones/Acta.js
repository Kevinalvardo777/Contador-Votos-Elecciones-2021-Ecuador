import React from 'react';
import {Link} from 'react-router-dom';

const Acta = () => {
    return ( 
        <div>
            <h1>Actas</h1>
            <Link to={"/presidentes"} className="enlace-cuenta">
                Presidentes
            </Link>
        </div>
     );
}
 
export default Acta;