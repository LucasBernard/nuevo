import '../App.css';
import React, { useState } from 'react';
import { Container, Grid, Header, Form, Icon, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
	const password_valido = 1234;
	const nombre_feli = 'F';

	const [ sesion_usuario, setSesion_usuario] = useState('');
	const [	sesion_password, setSesion_password] = useState('');

	const [ usuario, setUsuario ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ mensaje, setMensaje ] = useState('');

	console.log(usuario);
	console.log(password);

	function validacion(usuario, password) {
		if (usuario == nombre_feli && password == password_valido) {
			setMensaje('Pronto será redirigido...');
			localStorage.setItem(usuario, setSesion_usuario)
			localStorage.setItem(password, setSesion_password)
		} else {
			setMensaje('Los datos que ha ingresado son incorrectos.');
		}
	}
	console.log(sesion_usuario)
	console.log(sesion_password)

	return (
		<Container>
			<Grid>
				<Grid.Row textAlign='centered'>
					<Container fluid>
						<Icon name="users" size="massive" />
						<Header size='huge'>Inicio de Sesión</Header>
					</Container>
				</Grid.Row>
				<Divider hidden/>
				<Grid.Row verticalAlign='middle'>
					<Container fluid>
						<Grid>
							<Grid.Row textAlign='centered'>
								<Form>
									<Form.Group>
										<Form.Input
											label="Usuario:"
											name='usuario'
											control='input'
											placeholder="Ingrese su usuario"
											name='usuario'
											value={usuario}
											required
											onChange={(event) => {setUsuario(event.target.value); }}	/>
										<Form.Input
											label='Contraseña:'
											name='contraseña'
											control='input'
											placeholder="Ingrese su contraseña"
											value={password}
											required
											onChange={(event) => {setPassword(event.target.value); }}/>
									</Form.Group>
									<Divider hidden/>
									<Grid columns={2} textAlign="left">
										<Grid.Column>
											<Link to="/Registro">Si no tiene cuenta, registrese aquí.</Link>
										</Grid.Column>
										<Grid.Column>
											<Button
												floated='right'
												primary type="Submit"
												onClick={() => {validacion(usuario, password);}}>
												Iniciar Sesión
											</Button>
										</Grid.Column>
									</Grid>
								</Form>
							</Grid.Row>
							<Grid.Row textAlign='centered'>
								<h2>{mensaje}</h2>
							</Grid.Row>
						</Grid>
					</Container>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default LoginForm;
