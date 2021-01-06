import React, { useState } from 'react';
import '../App.css';
import { Menu, Grid, Image, Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams ,useHistory} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

function AgregarUsuarios(props){
    let session_correo = localStorage.getItem('session_correo');
    let session_agregar = localStorage.getItem('session_agregar');
	console.log(session_correo)
	const history = useHistory();
	const [correo,setCorreo] = useState('');


	const handleCancelar = (e) => {
		history.push('/Sala')
	}

	const handleCorreo= (e) => {
		setCorreo(e.target.value);
	}


	const handleEnviar = (e) => {
			e.preventDefault();
			axios.get("http://localhost:8000/rutasGrupo/agregarusuario", {
            headers:{ _id:session_agregar,correo: correo}, 
            
			}).then((data) => {
				alert('Se añadido el correctamente!');
				history.push('/Sala')
                
				
	})
	}

	console.log(correo)

	return (
		<div className="App" style={{marginLeft: 300,marginTop:100,marginRight:100}}>
			<div className="ui yellow fluid card" style={{ padding: 20 }}>
				<div className="center aligned">
					<h1>Agregar Usuario</h1>
				</div>
				<form className="ui form">
					<div class="field">
						<label>Ingrese el correo de el usuario</label>
						<input onChange={handleCorreo} required placeholder="Ingrese su nombre" type="text" />
					</div>
					

					<div className="center aligned">
						<div class="ui buttons">

								<button class="ui button" onClick={handleCancelar}>Cancelar y volver</button>

							<div class="or" />
							<button onClick={handleEnviar} class="ui positive button">Agregar</button>
						</div>
					</div>
				</form>
			</div>
		</div> 
	);
};

export default AgregarUsuarios;
