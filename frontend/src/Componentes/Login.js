import '../App.css';
import React, { useState } from 'react';
import { Container, Grid, Header, Form, Icon, Button, Divider, Segment, Image, Label } from 'semantic-ui-react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

function Login(props){
	const history = useHistory();

	const [ correo, setCorreo ] = useState('');
	const [ contrasena, setContrasena ] = useState('');

	const handleCorreo = (e) => {
		setCorreo(e.target.value)
	}

	const handleContrasena = (e) => {
		setContrasena(e.target.value)
	}

	const handleSubmit = (e) => {
		axios.post('http://localhost:8000/rutas/login', {
			correo: correo,
			contrasena: contrasena
		}).then((data) => {
			localStorage.setItem('session_correo', data.data.correo)
			localStorage.setItem('session_id',data.data.id);
			history.push("/Principal");
		})
	};
	


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
								value={correo}
								required
								onChange={handleCorreo}
							/>
							<Form.Input
								icon="lock"
								iconPosition="left"
								label="Contraseña"
								type="password"
								value={contrasena}
								required
								onChange={handleContrasena}
							/>
							<Button
								content="Iniciar Sesión"
								primary
								onClick={handleSubmit}
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

export default Login;
