import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FcUnlock, FcAddressBook } from 'react-icons/fc'

const NuevaCuenta = () => {

    // syled component para logo
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

    // State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '', 
        password: '', 
        confirmar: ''
    });

    // extraer de usuario
    const {nombre, email, password, confirmar} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        // validar que no haya campos vacios

        // Password minimo de 6 caracteres

        // los dos passwords sean iguales

        // Pasarlo al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sobra-dark">
                <h1>Obtener Cuenta</h1>
                <Imagen src="https://i1.wp.com/cedatos.com.ec/wp-content/uploads/2020/02/eleccionesecuador-692x360-1-1.jpg?fit=692%2C360&ssl=1"
                alt={'logo votaciones 2021'}/>

            <form
                onSubmit={onSubmit}
            >
                <div className="campo-form">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Ingrese el nombre"
                        value={nombre}
                        onChange={onChange}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="email"><FcAddressBook /> Correo</label>
                    <input 
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Ingrese correo"
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="password"><FcUnlock /> Contraseña</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Ingrese contraseña"
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="confirmar"><FcUnlock /> Confirmar Contraseña</label>
                    <input 
                        type="password"
                        id="confirmar"
                        name="confirmar"
                        placeholder="Repite tu contraseña"
                        value={confirmar}
                        onChange={onChange}
                    />
                </div>
                <div className="campo-form">
                    <input type="submit" 
                    className="btn btn-primario btn-block" 
                    value="Registrarme"/>
                </div>
                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar sesión
                </Link>
            </form>
        </div>
        </div>
     );
}
 
export default NuevaCuenta;