import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function MediaCard(props) {

    const useStyles = makeStyles({
        root: {
            marginTop:30,
            borderRadius:0
        },
        media: {
            height: props.height,
        },
    });
    const classes = useStyles();
    console.log();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.src}
                    title={props.title}
                />
                {props.title && (
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.texto}
                    </Typography>
                </CardContent>
                )}
            </CardActionArea>
            {props.share && (
            <CardActions>
                <Button size="small" color="primary">
                    {props.share}
                </Button>
                <Button size="small" color="primary">
                    {props.more}
                </Button>
            </CardActions>
            )}
        </Card>
    );
}
