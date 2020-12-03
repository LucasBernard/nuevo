import React, { useState } from 'react';
import '../App.css';
import { Icon } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

const Registro = () => {
	return (
		<div className="App">
			<div className="ui yellow fluid card" style={{ padding: 20 }}>
				<div className="center aligned">
					<h1>Registrarse</h1>
				</div>
				<form className="ui form">
					<div class="field">
						<label>Ingrese su nombre</label>
						<input required placeholder="Ingrese su nombre" type="text" />
					</div>
					<div class="field">
						<label>Ingrese su apellido</label>
						<input required placeholder="Ingrese su apelldo" type="text" />
					</div>
					<div class="field">
						<label>Ingrese su Carrera</label>
						<select required>
                            <option></option>
							<option value="grapefruit">Grapefruit</option>
							<option value="lime">Lime</option>
							<option value="coconut">Coconut</option>
							<option value="mango">Mango</option>
						</select>
					</div>
					<div class="field">
						<label>Ingrese su correo</label>
						<input required placeholder="Ingrese su correo" type="text" />
					</div>
					<div class="field">
						<label>Ingrese su telefono</label>
						<input placeholder="Ingrese su nombre" type="text" />
					</div>
					<div className="center aligned">
						<div class="ui buttons">
							<Link to="/">
								<button class="ui button">Cancelar y volver</button>
							</Link>
							<div class="or" />
							<button class="ui positive button">Guardar</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Registro;
