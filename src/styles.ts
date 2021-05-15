import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: '900px',
      maxWidth: '1360px',
      padding: theme.spacing(12),
      paddingTop: theme.spacing(10)
      
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
    },

    gridWrapper: {
      display: 'flex',
      minWidth: '555px',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
      },
    },

    tableRow:{
      cursor: 'pointer'
    }
  }));
  
  