import React, { useState } from 'react';
import '../App.css';
import { Menu, Grid, Image, Container, Header, Search, Icon, Table } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, useHistory } from 'react-router-dom';

const BuscarGrupos = () => {
    let user = localStorage.user,
		password = localStorage.pass;
    const usuario_admitido = [ 'F',1234];
    const history = useHistory();
    if (user != usuario_admitido[0] && password != usuario_admitido[1]) {
		history.push("/")
	};

	const [buscador,setBuscador] = useState('');

	const handleBuscador = (e) => {
		setBuscador(e.target.value)
	}

	const [ sesion_usuario, setSesion_usuario ] = useState('');

	return (
		<Grid style={{marginLeft:"400px",marginTop:"50px"}}>
			<Header as="h1">Buscar Grupos</Header>
			<Grid.Row>
				<Grid.Column width={4}>
					<Search ></Search>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column width={14}>
					<Table celled striped>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell colSpan="3">Grupos Encontrados</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							<Table.Row>
								<Table.Cell collapsing>
									<Icon name="folder" /> Fisica110
								</Table.Cell>
								<Table.Cell>Vectores</Table.Cell>
								<Table.Cell collapsing textAlign="right">
									2 Horas
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Icon name="folder" /> Matematicas 120
								</Table.Cell>
								<Table.Cell>Matrices</Table.Cell>
								<Table.Cell textAlign="right">10 Minutos</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Icon name="folder" /> Matematica 110
								</Table.Cell>
								<Table.Cell>Funciones</Table.Cell>
								<Table.Cell textAlign="right">6 Horas</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Icon name="folder" /> E.Fisica II
								</Table.Cell>
								<Table.Cell>Rutinas</Table.Cell>
								<Table.Cell textAlign="right">10 Horas</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Icon name="folder" /> Quimica
								</Table.Cell>
								<Table.Cell>Enlaces Quimicos</Table.Cell>
								<Table.Cell textAlign="right">48 Minutos</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default BuscarGrupos;
<Search value="" />;
