import React, { useState } from 'react';
import '../App.css';
import { Menu, Grid, Image, Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, useHistory } from 'react-router-dom';
import { ConnectionStates } from 'mongoose';
import axios from 'axios';

const Principal = () => {
	const history = useHistory();
	let session_correo = localStorage.getItem('session_correo');
	console.log(session_correo)
	const [ showState, setShowState ] = React.useState(true);
	const [ correoValidar, setCorreoValidar] = useState('');
	
	const handleCorreoValidar = (e) => {
		console.log(setCorreoValidar(e))
		setCorreoValidar(e);
		
	};
	console.log(correoValidar);

	const getData = () => {
		axios.post('http://localhost:8000/rutasvalidacion/Principal',{
		 headers:{correo : session_correo}
		}).then(data => {
			const info = data.data
			handleCorreoValidar(info);

		});
		};
		if (showState === true) {
			getData();
			setShowState(false);
		}
		if (correoValidar !== session_correo){
			console.log(session_correo)
			//history.push('/')
		}
		




	
	//if (user != usuario_admitido[0] && password != usuario_admitido[1]) {
	//	history.push('/');
	//}

	const [ sesion_usuario, setSesion_usuario ] = useState('');

	return (
		<div className="Contenedor">
			<h1>Hola</h1>
		</div>
		/* Hay que escribir más */

		/* sobretodo del contenedor principal */
	);
};

export default Principal;
