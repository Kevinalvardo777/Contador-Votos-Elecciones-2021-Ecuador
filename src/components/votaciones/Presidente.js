import React, {useState} from 'react';

function Presidente() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 htmlFor="votaciones" className="text-center">Candidatos a la presidencia</h1>
       <p className="lead text-center">Buscador de candidatos</p>
      
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card">
              <div className="card-img-top">
                  <img src="" alt="foto candidato" className="card-img-top" />
                  <div className="card-body">
                    <p className="text-center">Candidato</p>
                    <p className="text-center">Partido</p>
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
    </div>
    
   
  );
}

export default Presidente;
