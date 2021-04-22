import React from 'react';
import axios from 'axios';

import Container from '@material-ui/core/Container';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import CryptoTable from './components/CryptoTable';
import ConvertBlock from './components/ConvertBlock';
import {TCoin} from './types';

import {useStyles} from './styles';



function App() {
  const classes = useStyles();
  const [allCoins, setallCoins] = React.useState<TCoin[]>([]);


  React.useEffect(() => {
    axios
      .get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
      .then(({ data }) => {
        const coins: TCoin[] = data.Data.map((coin: any) => {
          const obj: TCoin = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
            price: parseFloat(coin.RAW.USD.PRICE),
            volume24hour: coin.RAW.USD.VOLUME24HOUR.toFixed(3),
          }
          return obj;
        });
        setallCoins(coins);
      });
  }, [])


  return (
    <Container maxWidth='lg' className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>  
            <CryptoTable classes={classes} items={allCoins}/>
        </Grid>
        <Grid item xs={4}>
            <ConvertBlock classes={classes}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
