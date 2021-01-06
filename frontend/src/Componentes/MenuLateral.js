import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Menu, Image, Container, Divider } from 'semantic-ui-react';
import './estandar.css';

const MenuLateral = () => {
	const history = useHistory();
	let session_correo = localStorage.getItem('session_correo')
	function eliminar() {
		localStorage.setItem('session_correo','') 
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
			<Link to='/CrearGrupos'>
			<Menu.Item as="a" >
				<i aria-hidden="true" class="address book icon" />Crear Grupo
			</Menu.Item>
			</Link>
			<Link to='/MisGrupos'>
			<Menu.Item as="a" >
				<i aria-hidden="true" class="address book icon" />Mis Grupos
			</Menu.Item>
			</Link>
			<Link to='/TodosLosGrupos'>
			<Menu.Item as="a" >
				<i aria-hidden="true" class="address book icon" />Todos los Grupos
			</Menu.Item>
			</Link>

			<Menu.Item as="a" >
				<i aria-hidden="true" class="book icon" />Biblioteca Personal
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
