import React from 'react';

import {makeStyles} from '@material-ui/core';


export const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    inputWrapper: {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: 25,
    }
  }));
  
  