import React, {useState , useEffect} from "react";
import { Label, Container, List, Grid, Divider} from 'semantic-ui-react';

function ListaAmigos(props) {
    const amigosPersonales = [];
    
    function agregarAmigo(usuarioSeleccionado) {
        amigosPersonales.push(usuarioSeleccionado);
    }

    function removerAmigo(usuarioSeleccionado, usuarioEliminado) {
        var indexUsuarioEliminado = amigosPersonales.indexOf(usuarioSeleccionado);
        amigosPersonales.splice(indexUsuarioEliminado, 1);
    }

    return(
        <Container>
            <Grid>
                <Grid.Row>
                    <Label>Amigos</Label>
                </Grid.Row>
                <Divider hidden/>
                <Grid.Row>
                    <List>

                    </List>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default ListaAmigos;