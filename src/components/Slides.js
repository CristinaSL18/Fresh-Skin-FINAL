import React, {Component} from 'react';
import {Container,Box, makeStyles} from '@material-ui/core';
import CardSimple from './CardSimple'

const useStyles = makeStyles ({
    root: {
        marginTop:-100
    },

});

export default class Slides extends Component {
    render() {
        return (
            <Container maxWidth="md" >
                <CardSimple src={'img/carrusel.png'} height={500}/>
            </Container>
        )
    }
}
