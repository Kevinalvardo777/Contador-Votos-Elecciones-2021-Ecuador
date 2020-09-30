import React from 'react';
import Acta from './Acta'

const ListadoActas = () => {
    return ( 
        <div className="col-12 p-2 row">
            {actas.map(acta => (
                <Acta />
            ) )}

        </div>

     );
}
 
export default ListadoActas;