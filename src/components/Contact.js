import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    textField:{
        display:'block'
    }
}));

const Contact = (config) => {
    const classes = useStyles();
    return (
        <div>
            <h2>Cotiza un Diseño</h2>
            <form className={classes.root} noValidate autoComplete="off">
                <div className={classes.textField}><TextField  id="outlined-basic" label="Nombre" variant="outlined" size={'small'} /></div>
                <div className={classes.textField}><TextField  id="outlined-basic" label="Teléfono" variant="outlined" size={'small'}/></div>
                <div className={classes.textField}><TextField  id="outlined-basic" label="Dirección de Entrega" variant="outlined" size={'small'} /></div>


            </form>
        </div>
    )
}
export default Contact;