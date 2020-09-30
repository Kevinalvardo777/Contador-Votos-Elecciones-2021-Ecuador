import React from 'react';

const Buscador = () => {
    return ( 
        <form 
            onSubmit=""
        >
                <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Buscar candidatos..."
                        onChange= ""
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn-lg btn-info btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            </form>
     );
}
 
export default Buscador;