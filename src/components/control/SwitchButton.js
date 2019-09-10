import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    button: {
      margin: 20,
    },
    input: {
      display: 'none',
    },
  }));

const SwitchButton = ({ switchCurrency }) => {
    const classes = useStyles();

    return (
        <Button variant="contained" onClick={switchCurrency} className={classes.button}>
            Switch
        </Button>
    )
}

export default SwitchButton;