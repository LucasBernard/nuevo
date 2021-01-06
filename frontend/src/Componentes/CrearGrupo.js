import React, { useState } from 'react';
import '../App.css';
import { Menu, Grid, Image, Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

function CrearGrupos(props){
	let session_correo = localStorage.getItem('session_correo');
	console.log(session_correo)

	const [nombre,setNombre] = useState('');
	const [ramo,setRamo] = useState('');
	const [estado,setEstado] = useState('');

	const handleNombre= (e) => {
		console.log(setNombre(e.target.value));
	}
	const handleRamo= (e) => {
		setRamo(e.target.value);
	}
	const handleEstado= (e) => {
		setEstado("Activo");
	}
	console.log(nombre)

	const handleEnviar = (e) => {
			e.preventDefault();
			axios.post("http://localhost:8000/rutasGrupo/creargrupos", {
				nombre: nombre,
				dueno: session_correo,
				materia: ramo,
				integrantes: session_correo
			}).then((data) => {
				alert('Se ha creado el correctamente!');
				
	})
	}

	return (
		<div className="App" style={{marginLeft: 300,marginTop:100,marginRight:100}}>
			<div className="ui yellow fluid card" style={{ padding: 20 }}>
				<div className="center aligned">
					<h1>Crear grupo</h1>
				</div>
				<form className="ui form">
					<div class="field">
						<label>Ingrese el nombre de grupo</label>
						<input onChange={handleNombre} required placeholder="Ingrese su nombre" type="text" />
					</div>
					<div class="field">
						<label>Ingrese la materia</label>
						<select onChange={handleRamo} required>
                            <option></option>
							<option value="Mat-021">MAT-021</option>
							<option value="FIS-110">FIS-110</option>
							<option value="FIS-120">FIS-120</option>
							<option value="FIS-130">FIS-130</option>
					
						</select>
					</div>

					<div className="center aligned">
						<div class="ui buttons">

								<button class="ui button">Cancelar y volver</button>

							<div class="or" />
							<button onClick={handleEnviar} class="ui positive button">Crear</button>
						</div>
					</div>
				</form>
			</div>
		</div> 
	);
};

export default CrearGrupos;
