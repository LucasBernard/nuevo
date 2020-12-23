import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Menu, Image, Container, Divider } from 'semantic-ui-react';
import './estandar.css';

const MenuLateral = () => {
	const history = useHistory();

	function eliminar() {
		localStorage.user = '';
		localStorage.pass = '';
		history.push('/');
	}

	return (
		<Menu borderless fixed="left" vertical>
			<Container textAlign="center">
				<Image fluid centered="true" src="/logoStudyAnt.png" />
				<h2>Study-Ant</h2>
				<Divider hidden />
			</Container>
			<Link to="/Principal">
				<Menu.Item as="a" >
					<i aria-hidden="true" class="home icon" />Inicio
				</Menu.Item>
			</Link>
			<Link to="/Perfil">
				<Menu.Item as="a" >
					<i aria-hidden="true" class="user circle icon" />Perfil
				</Menu.Item>
			</Link>
			<Link to="/BuscarGrupos">
				<Menu.Item as="a" >
					<i aria-hidden="true" class="group icon" />Buscar grupos
				</Menu.Item>
			</Link>
			<Menu.Item as="a" >
				<i aria-hidden="true" class="address book icon" />Grupos
			</Menu.Item>
			<Menu.Item as="a" >
				<i aria-hidden="true" class="book icon" />Biblioteca Personal
			</Menu.Item>
			<Menu.Item as="a">
				<i aria-hidden="true" class="address card icon" />Amigos
			</Menu.Item>
			<Menu.Item
				as="a"
				onClick={() => {
					eliminar();
				}}
			>
				<i aria-hidden="true" class="address card icon" />Cerrar Sesion
			</Menu.Item>
		</Menu>
	);
};

export default MenuLateral;
