import React from 'react';
import Acta from './Acta'

const ListadoActas = () => {
    return ( 
        <div className="col-12 p-2 row">
            <h1>Tipos de Actas</h1>
            {actas.map(acta => (
                
                <Acta />
            ) )}

        </div>

     );
}
 
export default ListadoActas;