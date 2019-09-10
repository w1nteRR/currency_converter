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

const CurrencyList = ({ from, rates, handleChange }) => {
    const classes = useStyles();
    return (
       <div>
            <TextField
            id="outlined-select-currency"
            select
            label="From"
            name='from'
            className={classes.textField}
            value={`base`}
            onChange={handleChange}
            SelectProps={{
                MenuProps: {
                    className: classes.menu
                },                                                                                                                                                                                                                
            }}
            margin="normal"
            variant="outlined"
        >
            <MenuItem value='base'>{from}</MenuItem> 
            {rates.map(option => (
                <MenuItem key={option[0]} value={option}>
                    {option[0]}
                </MenuItem>
            ))}
        </TextField>
       </div>
    )
}

export default CurrencyList;

