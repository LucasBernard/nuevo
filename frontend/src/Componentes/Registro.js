import React, { useState } from 'react';
import '../App.css';
import { Menu, Grid, Image, Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

function Registro(props){

	const [nombre,setNombre] = useState('');
	const [apellido,setApellido] = useState('');
	const [contrasena,setContrasena] = useState('');
	const [carrera,setCarrera] = useState('');
	const [correo,setCorreo] = useState('');
	const [telefono,setTelefono] = useState('');
	const [estado,setEstado] = useState('');

	const handleNombre= (e) => {
		console.log(setNombre(e.target.value));
	}
	const handleApellido= (e) => {
		setApellido(e.target.value);
	}
	const handleContrasena= (e) => {
		setContrasena(e.target.value);
	}
	const handleCarrera= (e) => {
		setCarrera(e.target.value);
	}
	const handleCorreo= (e) => {
		setCorreo(e.target.value);
	}
	const handleTelefono= (e) => {
		setTelefono(e.target.value);
	}
	console.log(nombre)

	const handleEnviar= (e) => {
			e.preventDefault();
			axios.post("http://localhost:8000/rutas/registro", {
				nombre: nombre,
				apellido: apellido,
				contrasena: contrasena,
				carrera: carrera,
				correo: correo,
				telefono: telefono,
			}).then((data) => {
				setEstado('Te has registrado correctamente!');
	})
	}

	return (
		<div className="App">
			<div className="ui yellow fluid card" style={{ padding: 20 }}>
				<div className="center aligned">
					<h1>Registrarse</h1>
				</div>
				<form className="ui form">
					<div class="field">
						<label>Ingrese su nombre</label>
						<input onChange={handleNombre} required placeholder="Ingrese su nombre" type="text" />
					</div>
					<div class="field">
						<label>Ingrese su apellido</label>
						<input onChange={handleApellido} required placeholder="Ingrese su apelldo" type="text" />
					</div>
					<div class="field">
						<label>Ingrese su contraseña</label>
						<input onChange={handleContrasena} required placeholder="Ingrese su contraseña" type="password" />
					</div>
					<div class="field">
						<label>Ingrese su Carrera</label>
						<select onChange={handleCarrera} required>
                            <option></option>
							<option value="grapefruit">Ing civil info</option>
					
						</select>
					</div>
					<div class="field">
						<label>Ingrese su correo</label>
						<input onChange={handleCorreo} required placeholder="Ingrese su correo" type="text" />
					</div>
					<div class="field">
						<label>Ingrese su telefono</label>
						<input onChange={handleTelefono} placeholder="Ingrese su nombre" type="text" />
					</div>
					<div className="center aligned">
						<div class="ui buttons">
							<Link to="/">
								<button class="ui button">Cancelar y volver</button>
							</Link>
							<div class="or" />
							<button onClick={handleEnviar} class="ui positive button">Guardar</button>
						</div>
					</div>
				</form>
			</div>
		</div> 
	);
};

export default Registro;
