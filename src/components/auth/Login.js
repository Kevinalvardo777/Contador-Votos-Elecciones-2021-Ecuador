import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import { GoMail } from "react-icons/go";
import { FcUnlock, FcAddressBook } from 'react-icons/fc'


const Login = () => {

    // Styled components para imagen de inicio de sesion
    const Imagen = styled.img`
        width: 20rem;
        height: 12rem;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 7%;
        border-radius: 10px;
        border: none;
    `;

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
           
            <div className="contenedor-form sombra-dark">
                <div className="col">
                    <h1 >Iniciar Sesión</h1>
                    <Imagen src="https://i1.wp.com/cedatos.com.ec/wp-content/uploads/2020/02/eleccionesecuador-692x360-1-1.jpg?fit=692%2C360&ssl=1" 
                    alt={'logo votaciones 2021'}/>
                </div>
                
                <form 
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email"> <FcAddressBook /> Correo</label>
                        <input 
                            icon="user"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ingrese Email"
                            value={email}
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password"><FcUnlock /> Contraseña</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingrese Contraseña"
                            value={password}
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                    <Link to={"/nueva-cuenta"}  className="enlace-cuenta">
                        Obtener Cuenta
                    </Link>
                    <Link to={"/actas"}  className="enlace-cuenta">
                        Ir a Actas temporalmente
                    </Link>
                </form>
            </div>
        </div>


     );
}
 
export default Login;