import React, { useState } from 'react';
import { Grid, Image, Header, Container, Form, TextArea, Button } from 'semantic-ui-react';
import './estandar.css';
import { BrowserRouter as Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Perfil = () => {
	let session_id = localStorage.getItem('session_id');

	const history = useHistory();
	const [ showState, setShowState ] = React.useState(true);
	const [ id, setId ] = useState('');
	const [ nombre, setNombre ] = useState('');
	const [ apellido, setApellido ] = useState('');
	const [ correo, setCorreo ] = useState('');
	const [ carrera, setCarrera ] = useState('');
	const [ telefono, setTelefono ] = useState('');

	const handleId = (e) => {
		setId(e);
	};

	const handleNombre = (e) => {
		setNombre(e);
	};

	const handleApellido = (e) => {
		setApellido(e);
	};

	const handleCorreo = (e) => {
		setCorreo(e);
	};

	const handleCarrera = (e) => {
		setCarrera(e);
	};

	const handleTelefono = (e) => {
		setTelefono(e);
	};


	const getData = () => {
		axios.get('http://localhost:8000/ruta/perfil',{
		 id: session_id,
		}).then((res) => {
				const data = res.data;
				handleId(data.id);
				handleNombre(data.nombre);
				handleApellido(data.apellido);
				handleCorreo(data.correo);
				handleCarrera(data.carrera);
				handleTelefono(data.telefono);
				console.log(res);
		});
		};
		if (showState === true) {
			getData();
			setShowState(false);
		}
	
		

	//if (user != usuario_admitido[0] && password != usuario_admitido[1]) {
	//	history.push('/');
	//}

	return (
		<Grid style={{ marginLeft: '450px', marginTop: '100px' }}>
			<Grid.Row>
				<Grid.Column width={4}>
					<Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
				</Grid.Column>
				<Grid.Column width={8}>
					<Container text>
						<Header style={{ marginBottom: '0px' }} as="h1">
							{nombre}
							<Header disabled as="h4">
								#{id}
							</Header>
						</Header>
						<Header style={{ marginTop: '0px' }} as="h4" disabled>
							{correo}
						</Header>
						<Header as="h3">{carrera}</Header>
						<Link to="/Ccontraseña">Cambiar contraseña</Link>
						<Header as="h3">Intereses: </Header>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
							Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
							ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
							consequat massa quis enim.
						</p>
					</Container>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column width={12}>
					<Form>
						<TextArea placeholder="Descripcion" />
					</Form>
				</Grid.Column>
				<Button color="teal">Agregar Descripción</Button>
			</Grid.Row>
		</Grid>
	);
};

export default Perfil;
