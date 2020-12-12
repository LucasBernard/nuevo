import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';
import "./estandar.css"
export default class MenuLateral extends Component {
  state = { activeItem: 'Principal' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Menu borderless fixed="left" vertical>
			
        <Menu.Item as='a' header>
            <Image size='tiny' centered="true" src='/logoStudyAnt.png'/>
            Study-Ant
        </Menu.Item>
        <Menu.Item as='a' active={activeItem === 'Principal'}>
            <i aria-hidden="true" class="home icon" />Inicio
        </Menu.Item>
        <Menu.Item as='a' active={activeItem === 'Perfil'}>
            <i aria-hidden="true" class="user circle icon" />Perfil
        </Menu.Item>
        <Menu.Item as='a' active={activeItem === 'Buscar'}>
            <i aria-hidden="true" class="group icon" />Buscar grupos
        </Menu.Item>
        <Menu.Item as='a' active={activeItem === 'Grupos'}>
            <i aria-hidden="true" class="address book icon" />Grupos
        </Menu.Item>
        <Menu.Item as='a' active={activeItem === 'Biblioteca'}>
            <i aria-hidden="true" class="book icon" />Biblioteca Personal
        </Menu.Item>
        <Menu.Item as='a' >
            <i aria-hidden="true" class="address card icon" />Amigos
        </Menu.Item>

    </Menu>
    

    )
  }
}