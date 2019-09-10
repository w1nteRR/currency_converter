import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
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

const CurrencyList = ({ rates, to, handleChange }) => {
    const classes = useStyles();
    return (
        <TextField
            id="outlined-select-currency"
            select
            label="To"
            className={classes.textField}
            value={`base`}
            onChange={handleChange}
            SelectProps={{
                MenuProps: {
                    className: classes.menu,
                },
            }}
            margin="normal"
            variant="outlined"
        >   
            <MenuItem value='base'>{to}</MenuItem> 
            {rates.map(option => (
                <MenuItem key={option[0]} value={option}>
                    {option[0]}
                </MenuItem>
            ))}

        </TextField>
    )
}

export default CurrencyList;

