import React, {useState} from 'react';
import styled from 'styled-components';

  const Imagen = styled.img`
    width: 13rem;
    height: 13rem;
    margin-left: 6rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    border: none;

      &:hover {
        height: 18rem;
        width: 18rem;
        margin-left: 4rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
  `;

function Asambleista({asambleista}) {

  //const [imgCandidato, altCandidato, nombreCandidato, partidoCandidato] = presidente;
  return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card">
              <div className="card-img-top">
                  <Imagen src="https://www.eluniverso.com/sites/default/files/styles/powgallery_1024/public/fotos/2009/11/10/barker11112009_456_336.jpg?itok=YHPl1GOu" 
                  alt="" className="card-img-top" />
                  <div className="card-body">
                    <p className="text-center" style={{fontWeight: "bold"}}>{'Richard Barker'}</p>
                    <p className="text-center">{'Democracia Si'}</p>
                    <p className="text-center">{'Lider: Gustavo Larrea'}</p>
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

export default Asambleista;
