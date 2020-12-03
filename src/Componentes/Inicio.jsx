import '../App.css';
import React, { useState } from 'react';
import { Icon, } from 'semantic-ui-react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
	NavLink,
	Redirect,
	useHistory
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Principal from './Principal';
const Inicio = () => {
	const history= useHistory();
	const passwrod_valido = 1234;
	const nombre_feli = 'F';

	const [ sesion_usuario, setSesion_usuario] = useState('');
	const [	sesion_password, setSesion_password] = useState('');

	const [ usuario, setUsuario ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ mensaje, setMensaje ] = useState('');

	console.log(usuario);
	console.log(password);

	function validacion(usuario, password) {
		if (usuario == nombre_feli && password == passwrod_valido) {
			setMensaje('sis');
			localStorage.setItem(usuario, setSesion_usuario)
			localStorage.setItem(password, setSesion_password)
			//history.push("/Principal");
			
		} else {
			setMensaje('Sesion incorrecta');
		}
	}
	console.log(sesion_usuario)
	console.log(sesion_password)
	return (
		<div className="App">
			<div className="ui yellow fluid card" style={{ padding: 20 }}>
				<div className="center aligned">
					<Icon name="users" size="massive" />
					<h1>Iniciar Sesion</h1>
				</div>

				<div className="left aligned">
					<form
						className="ui form"
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<div class="field">
							<label>Nombre usuario</label>
							<input
								placeholder="Ingrese nombre ususario"
								type="text"
								value={usuario}
								onChange={(event) => {
									setUsuario(event.target.value);
								}}
							/>
						</div>
						<div class="field">
							<label>Contraseña</label>
							<input
								placeholder="Ingrese contraseña"
								type="password"
								value={password}
								onChange={(event) => {
									setPassword(event.target.value);
								}}
							/>
						</div>
						<div class="field">
							<Link to="/Registro">Si aun no se ha regstrado ingrese aquí</Link>
						</div>
						<div className="center aligned">
							<button
								type="submit"
								class="ui button"
								onClick={() => {
									validacion(usuario, password);
								}}
							>
								Iniciar Sesión
							</button>
						</div>
					</form>
				</div>
				<h1 className="center aligned">{mensaje}</h1>
			</div>
		</div>
	);
};

export default Inicio;
