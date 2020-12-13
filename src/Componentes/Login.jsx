import '../App.css';
import React, { useState } from 'react';
import { Container, Grid, Header, Form, Icon, Button, Divider, Segment, Image, Label } from 'semantic-ui-react';
import { useHistory, Link } from 'react-router-dom';

const DividerExampleVerticalForm = () => {
	const password_valido = 1234;
	const nombre_feli = 'F';
	const history = useHistory();

	const [ sesion_usuario, setSesion_usuario ] = useState('');
	const [ sesion_password, setSesion_password ] = useState('');

	const [ usuario, setUsuario ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ mensaje, setMensaje ] = useState('');




	console.log(usuario);
	console.log(password);

	

	function validacion(usuario, password) {
		if (usuario == nombre_feli && password == password_valido) {
			setMensaje('Pronto será redirigido...');
			history.push('/Principal');
		} else {

			setMensaje('Ingreso los datos de manera incorrecta.');
			

		}
	}
	console.log(sesion_usuario);
	console.log(sesion_password);

	return (
		
		<Container style={{ marginTop: '100px' }}>
			<Image size="tiny" style={{ width: '200px' }} centered="true" src="/logoStudyAnt.png" />
			<Header style={{marginLeft:"400px"}} as="h1">Bienvenido a Study Ant's</Header>
			<Segment placeholder>
				<Grid columns={2} relaxed="very" stackable>
					<Grid.Column>
						<Form>
							<Form.Input
								icon="user"
								iconPosition="left"
								label="Correo"
								placeholder="Correo"
								value={usuario}
								required
								onChange={(event) => {
									setUsuario(event.target.value);
								}}
							/>
							<Form.Input
								icon="lock"
								iconPosition="left"
								label="Contraseña"
								type="password"
								value={password}
								required
								onChange={(event) => {
									setPassword(event.target.value);
								}}
							/>
							<Label centered="true" >{mensaje}</Label>
							<Button
								content="Iniciar Sesión"
								primary
								onClick={() => {
									validacion(usuario, password);
								}}
							/>
						</Form>
					</Grid.Column>

					<Grid.Column verticalAlign="middle">
						<Link to="/Registro">
							<Button content="Registrarse" icon="signup" size="big" />
						</Link>
					</Grid.Column>
				</Grid>

				<Divider vertical>O</Divider>
			</Segment>
		</Container>
	);
};

export default DividerExampleVerticalForm;
