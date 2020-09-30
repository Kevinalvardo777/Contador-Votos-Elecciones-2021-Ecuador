import React, {useState, useEffect} from 'react';
import Presidente from './Presidente'

/**
 * 
 * 
 * {presidentes.map(presidente =>(
                <Presidente 
                    key={presidente.id}
                    presidente={presidente}
                />
            )) }
 */

const ListadoPresidentes = ({presidentes}) => {
    return ( 
        <div className="col">
            <div className="row">
                    <Presidente />
                    <Presidente />
                    <Presidente />
                    <Presidente />
                    <Presidente />
                    <Presidente />
                    <Presidente />
                    <Presidente />
                    <Presidente />
                    <Presidente />
                    <Presidente />
                    <Presidente />
            </div>
                
        </div>
     );
}
 
export default ListadoPresidentes;