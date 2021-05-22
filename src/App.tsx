import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import Container from '@material-ui/core/Container';

import { fetchCryptoAsync, getOldPrices } from './redux/action/crypto';
import { MainBlock } from './components';

import { useStyles } from './styles';

function App() {
  const classes = useStyles();
  const dispatch: Dispatch<any> = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCryptoAsync());
    let getItems = setInterval(() => {
      dispatch(getOldPrices());
      dispatch(fetchCryptoAsync());
    }, 30000);
    return () => clearInterval(getItems);
  }, []);

  return (
    <Container className={classes.root}>
      <MainBlock classes={classes} />
    </Container>
  );
}

export default App;
