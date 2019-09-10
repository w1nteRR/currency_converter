import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));

const Input = ({ label, disabled, handleChange }) => {
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-email-input"
                label={label || ''}
                className={classes.textField}
                type="number"
                name="amount"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                disabled={disabled}
            />
        </form>
    );
}

export default Input;
