import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Header, Container,Form,TextArea,Button } from 'semantic-ui-react';
import './estandar.css';

const Perfil = () => (
    <Grid style={{ marginLeft: '450px',marginTop: '100px'}}>
        <Grid.Row>
            <Grid.Column width={4}>
                <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
            </Grid.Column>
            <Grid.Column width={8}>
                <Container text>
                    <Header style={{ marginBottom: '0px'}} as="h1">Lucas Bernard<Header disabled as="h4" disabled >#1234</Header></Header>
                    <Header style={{ marginTop: '0px'}} as="h4" disabled >Lucas.bernard@usm.cl</Header>
                    <Header as="h3">Ingenería Civil Informática</Header>
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
            <Button color='teal'>Agregar Descripción</Button>
        </Grid.Row>
    </Grid>
);

export default Perfil;