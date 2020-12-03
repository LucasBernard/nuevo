import React, { useState } from 'react';
import '../App.css';
import { Icon } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

const Principal = () => {
	const [ sesion_usuario, setSesion_usuario] = useState('');
	
	return (
		<div>
			<h1> jerh </h1>

			<div class="ui inverted vertical labeled icon ui overlay left thin visible sidebar menu">
				<a class="item">
					<i aria-hidden="true" class="home icon" />Home
				</a>
				<a class="item">
					<i aria-hidden="true" class="gamepad icon" />Games
				</a>
				<a class="item">
					<i aria-hidden="true" class="camera icon" />Channels
				</a>
			</div>
		</div>
	);
};

export default Principal;
