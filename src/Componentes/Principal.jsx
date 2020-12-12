import React, { useState } from 'react';
import '../App.css';
import { Menu, Grid, Image, Container } from 'semantic-ui-react';

const Principal = () => {
	const [ sesion_usuario, setSesion_usuario] = useState('');
	
	return (
		<Menu borderless fixed="left" vertical>
			<Menu.Item as='a' header>
				<Image size='tiny' centered="true" src='/logoStudyAnt.png'/>
				Study-Ant
			</Menu.Item>
			<Menu.Item as='a'>
				<i aria-hidden="true" class="home icon" />Inicio
			</Menu.Item>
			<Menu.Item as='a'>
				<i aria-hidden="true" class="user circle icon" />Perfil
			</Menu.Item>
			<Menu.Item as='a'>
				<i aria-hidden="true" class="group icon" />Buscar grupos
			</Menu.Item>
			<Menu.Item as='a'>
				<i aria-hidden="true" class="address book icon" />Grupos
			</Menu.Item>
			<Menu.Item as='a'>
				<i aria-hidden="true" class="book icon" />Biblioteca Personal
			</Menu.Item>
			<Menu.Item as='a'>
				<i aria-hidden="true" class="address card icon" />Amigos
			</Menu.Item>
		</Menu>

		/* Hay que escribir más */

		/* sobretodo del contenedor principal */
	);
};

export default Principal;
