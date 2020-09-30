import React, {useState, useEffect} from 'react';
import Asambleista from './Asambleista';

/**
 * 
 * 
 * {asambleistas.map(asambleista =>(
                <Presidente 
                    key={asambleista.id}
                    presidente={asambleista}
                />
            )) }
 */

const ListadoAsambleistas = ({asambleistas}) => {
    return ( 
        <div className="col">
            <div className="row">
                    <Asambleista />
                    <Asambleista />
                    <Asambleista />
                    <Asambleista />
                    <Asambleista />
                    <Asambleista />
                    <Asambleista />
                    <Asambleista />
                    <Asambleista />
                    <Asambleista />
                    <Asambleista />
                    <Asambleista />
            </div>
                
        </div>
     );
}
 
export default ListadoAsambleistas;