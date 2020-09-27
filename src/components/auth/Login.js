import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // extraer de usuario
    const {email, password} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario, 
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        //validar que campos no estén vacios


        //Pasarlo al action
    }

    return ( 
        
        <div className="form-usuario">
           
            <div className="contenedor-form sobra-dark">
                <h1 >Iniciar Sesión</h1>
                <form 
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Correo</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ingrese Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingrese Contraseña"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                    <Link to={"/nueva-cuenta"} className="enlace-cuenta">
                        Obtener Cuenta
                    </Link>
                </form>
            </div>
        </div>


     );
}
 
export default Login;