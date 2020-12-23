import React, { useState } from 'react';
import '../App.css';
import { Menu, Grid, Image, Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, useHistory } from 'react-router-dom';

const Principal = () => {
	const history = useHistory();

	let session_correo = localStorage.getItem('session_correo'),
	session_id = localStorage.getItem('session_id');



	
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
