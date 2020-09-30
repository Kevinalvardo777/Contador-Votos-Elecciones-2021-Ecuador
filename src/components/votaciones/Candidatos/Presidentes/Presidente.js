import React, {useState} from 'react';
import styled from 'styled-components';

  const Imagen = styled.img`
    width: 13rem;
    height: 13rem;
    margin-bottom: 7%;
    border-radius: 10px;
    border: none;

      &:hover {
        height: 18rem;
        width: 18rem;
        margin-top: auto;
        margin-bottom: 7%;
      }
  `;

function Presidente({presidente}) {

  //const [imgCandidato, altCandidato, nombreCandidato, partidoCandidato] = presidente;
  return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card">
              <div className="card-img-top">
                  <div className="card-body">
                    <div className="col text-center">
                       <Imagen src="data:image/jpeg;base64,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" 
                          alt="" />
                      <p className="text-center" style={{fontWeight: "bold"}}>{'Guillermo Lasso'}</p>
                      <p className="text-center">{'Creo'}</p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-info btn-block"
                    >Votar</a>
                  </div>

              </div>
          </div>
      </div>
    
    
   
  );
}

export default Presidente;
