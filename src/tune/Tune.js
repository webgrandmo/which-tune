import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Buttons from '../buttons/Button';

const currencies = [
  {
    value: 'Algerian scale',
  },
  {
    value: 'Altered scale',
  },
  {
    value: 'Augmented scale',
  },
  {
    value: 'Bebop dominant scale',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [tune, setCurrency] = React.useState('Algerian scale');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="filled-select-tune"
          select
          label="Select"
          value={tune}
          onChange={handleChange}
          helperText="Please select your tune"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <Buttons />
    </form>
  );
}