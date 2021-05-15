import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import { CryptoState, TCoin } from '../../types';

import { ConvertBlock, CryptoTable } from '../index';

type MainBlockType = {
  classes: any;
};

const MainBlock: React.FC<MainBlockType> = ({ classes }) => {
  const { allCoins, loading } = useSelector((state: CryptoState) => state);
  //console.log(state.loading, state.allCoins[0]);

  const [userCoin, setUserCoin] = React.useState<TCoin>({ ...allCoins[0] });

  //console.log(state.loading, state.allCoins[0], userCoin)

  React.useEffect(() => {
    if (allCoins[0] !== undefined) {
      setUserCoin({ ...userCoin, ...allCoins[0] });
    }
  }, [loading]);

  const setPrice = (coin: TCoin): void => {
    if (coin !== undefined) {
      setUserCoin(coin);
    }
  };

  return (
    <>
      <Grid className={classes.gridWrapper} container spacing={3}>
        <Grid item xs={10} sm={10} md={10} lg={4}>
          <ConvertBlock classes={classes} coins={allCoins} loading={loading} userCoin={userCoin} />
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={8}>
          <CryptoTable classes={classes} coins={allCoins} loading={loading} setPrice={setPrice} />
        </Grid>
      </Grid>
    </>
  );
};

export default MainBlock;
