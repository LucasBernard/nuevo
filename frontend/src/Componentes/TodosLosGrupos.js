import React, { useState } from 'react';
import { Grid, Image, Header, Container, Form, TextArea, Button, Table, Tab } from 'semantic-ui-react';
import './estandar.css';
import { BrowserRouter as Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const TodosLosGrupos = () => {

    let session_correo = localStorage.getItem('session_correo');
	console.log(session_correo);

	const history = useHistory();
	const [ showState, setShowState ] = React.useState(true);
	const [ ramo, setRamo ] = useState('');
    const [ nombre, setNombre ] = useState('');
	const [ grupo, setGrupo ] = useState([]);
	const [ valor, setValor ] = useState('');

	const handleRamo = (e) => {
		setRamo(e);
	};

	const handleNombre = (e) => {
		setNombre(e);
    };
    
    const handleGrupo = (e) =>{
        setGrupo(e)
	}
	const handleEntrar =(e)=>{
		e.preventDefault();
		setValor(e.target.value);
		
		
	}
	console.log(valor);
	if (valor != ''){
		localStorage.setItem('session_agregar',valor)
		history.push('/Sala')
	}
	
	
	
	const getData = () => {
		axios
			.get('http://localhost:8000/rutasGrupo/todoslosgrupos', {
				headers: { correo: session_correo }
			})
			.then((data) => {
				console.log(data.data)
                handleGrupo(data.data)
				handleNombre(data.data.nombre);
				handleRamo(data.data.materia);
			});
	};
	if (showState === true) {
		getData();
		setShowState(false);
    }

	//if (user != usuario_admitido[0] && password != usuario_admitido[1]) {
	//	history.push('/');
	//}
    console.log(grupo)
	return (
		<Grid style={{marginLeft: 300,marginTop:100,marginRight:100}}>
            <h1>Mis Grupos</h1>
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Nombre Grupo</Table.HeaderCell>
						<Table.HeaderCell>Materia interes</Table.HeaderCell>
						<Table.HeaderCell>Agregar a un usuario</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
			{
                grupo.map(grupo =>{
                    return(
                        <Table.Row >
                        <Table.Cell>
                            {grupo.nombre}
                        </Table.Cell>
                        <Table.Cell>
                            {grupo.materia}
                        </Table.Cell>
						<Table.Cell>
							<Button value={grupo._id} onClick={handleEntrar}>Entrar</Button>
                        </Table.Cell>
						
                        </Table.Row>
                    )
                })
            }
				</Table.Body>
			</Table>
		</Grid>
	);
};

export default TodosLosGrupos;
