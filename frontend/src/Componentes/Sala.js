import React, { useState, useRef } from 'react';
import { Grid, Image, Header, Container, Form, TextArea, Button, Table, Tab } from 'semantic-ui-react';
import './estandar.css';
import { BrowserRouter as Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import CanvasDraw from 'react-canvas-draw';
import { SliderPicker } from 'react-color';

const Sala = () => {
	let session_correo = localStorage.getItem('session_correo');
	let session_agregar = localStorage.getItem('session_agregar');
	console.log(session_agregar, 'es la session agregar');

	const firstCanvas = useRef();

	const history = useHistory();
	const [ showState, setShowState ] = React.useState(true);
	const [ ramo, setRamo ] = useState('');
	const [ nombre, setNombre ] = useState('');
	const [ grupo, setGrupo ] = useState([]);
	const [ valor, setValor ] = useState('');
	const [ integrantes, setIntegrantes ] = useState([]);
	const [ color, setColor ] = useState('#ff0000')

	const clear = () => {
		firstCanvas.current.clear();
	};
	const undo = () => {
		firstCanvas.current.undo();
	};
	const handleRamo = (e) => {
		setRamo(e);
	};

	const handleNombre = (e) => {
		setNombre(e);
	};

	const handleGrupo = (e) => {
		setGrupo(e);
	};
	const handleAgregar = (e) => {
		history.push('/AgregarUsuario');
	};
	const handleIntegrantes = (e) => {
		setIntegrantes(e);
	};

	const getData = () => {
		axios
			.get('http://localhost:8000/rutasGrupo/sala', {
				headers: { _id: session_agregar }
			})
			.then((data) => {
				handleIntegrantes(data.data.integrantes);
				handleGrupo(data.data.nombre);
			});
	};
	if (showState === true) {
		getData();
		setShowState(false);
	}
	
	//if (user != usuario_admitido[0] && password != usuario_admitido[1]) {
	//	history.push('/');
	//}
	console.log(integrantes);
	return (
		<Grid divided="vertically " style={{ marginLeft: 300, marginRight: 100 }}>
			<Grid.Row>{grupo}</Grid.Row>
			<Grid.Row columns={2}>
				<Grid.Column style={{ width: 700 }}>
					<Table.Row>Pizarra</Table.Row>

					<Table.Row>
						<CanvasDraw
							brushRadius={1}
							canvasHeight={700}
							canvasWidth={700}
							brushColor={color}
							style={{ border: '1px solid' }}
							ref={firstCanvas}
						/>
					</Table.Row>
					
					<Table.Row>
						<SliderPicker color={color} onChangeComplete ={(color)=>{setColor(color.hex)}}/>
						<br></br>
						<Button onClick={clear}>borrar</Button>
						<Button onClick={undo}>retroceder</Button>
					</Table.Row>
				</Grid.Column>
				<Grid.Column>
					<Table.Row>
						<Table.HeaderCell>Opciones</Table.HeaderCell>
					</Table.Row>
					<Table.Row>
						<Button onClick={handleAgregar}>Agregar usuarios al grupo</Button>
					</Table.Row>

					<Table.Row>
						<Table.HeaderCell>Integrantes</Table.HeaderCell>
					</Table.Row>
					<Table.Row>
						<Table.HeaderCell> </Table.HeaderCell>
					</Table.Row>
					<Table.Body>
						{integrantes.map((integrante) => {
							return (
								<Table.Row>
									<Table.Cell>{integrante}</Table.Cell>
								</Table.Row>
							);
						})}
					</Table.Body>
				</Grid.Column>
			</Grid.Row>
			
		</Grid>
	);
};

export default Sala;
