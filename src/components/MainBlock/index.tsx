import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import { CryptoState, TCoin } from '../../types';

import { ConvertBlock, CryptoTable } from '../index';

type MainBlockType = {
  classes: any;
};

const MainBlock: React.FC<MainBlockType> = ({ classes }) => {
  const { allCoins, loading, diff } = useSelector((state: CryptoState) => state);

  const [userCoin, setUserCoin] = React.useState<TCoin>({ ...allCoins[0] });

  React.useEffect(() => {
    setUserCoin({ ...userCoin, ...allCoins[0] });
  }, []);

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
          <CryptoTable
            classes={classes}
            coins={allCoins}
            loading={loading}
            setPrice={setPrice}
            diff={diff}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MainBlock;
