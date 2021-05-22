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
      cursor: 'pointer',
    },

    // priceBlock:{
    //   background: '#96969670',
    //   transition: 'background 4s linear',
    //   // '&:priceUp':{
    //   //   background: '#00800075', 
    //   //   transition: 'background 4s linear',
    //   // },
    //   // '::priceDown':{
    //   //   background: '#ff00007a',
    //   // },
    //   '&:hover':{
    //     background: '#00800075', 
    //     transition: 'background 1s linear',
    //   },
    //   priceUp:{
    //       background: '#00800075', 
    //       //background: '#00800075',
    //       //transition: '1s';
    //       transition: 'background 1s linear',
    //   },
    // }
    priceUp:{
      background: '#00800075',
      //transition: 'background 4s linear',
    },
    priceDown:{
      background: '#ff00005c',
      //transition: 'background 0.5s ease',
    }
  }));
  
  