import React from 'react';
import {Container, Grid} from "@material-ui/core";
import CardSimple from './CardSimple';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {ButtonContainer} from "./Button";

const Gallery = (props) => {
    return (
        <Container maxWidth="md">
            <Grid container spacing={3} >
                <Grid item xs={12} sm={4}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="300"
                                image="img/conocenos.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    Conocenos
                                </p>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="300"
                            image="img/ingredientes.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                Ingredientes
                            </p>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="300"
                            image="img/losmasvendidos.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                Los más vendidos
                            </p>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Gallery;
