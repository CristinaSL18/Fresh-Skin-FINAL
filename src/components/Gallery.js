import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


function Gallery( name, classes) {
    return(
        <Card className={classes.item}>
            <CardMedia/>
            <CardContent>
                <Typography component="p" variant="h6">{name}</Typography>
            </CardContent>
        </Card>
    )

}
