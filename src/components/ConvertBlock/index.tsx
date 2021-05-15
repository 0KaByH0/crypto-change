import React from 'react';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';

import { TCoin } from '../../types';

type IConvertBlock = {
  classes: any;
  coins: TCoin[];
  userCoin: TCoin;
  loading?: boolean;
};

const ConvertBlock: React.FC<IConvertBlock> = ({ classes, coins, userCoin, loading }) => {
  const [firstCoinPrice, setFirstCoinPrice] = React.useState<number | string>(
    coins[0] !== undefined ? coins[0].price : '',
  );
  const [firstCoinName, setFirstCoinName] = React.useState<string>(
    coins[0] !== undefined ? coins[0].name : '',
  );
  const [secondCoinPrice, setSecondCoinPrice] = React.useState<number | string>(
    coins[1] !== undefined ? coins[1].price : '',
  );
  const [secondCoinName, setSecondCoinName] = React.useState<string>(
    coins[1] !== undefined ? coins[1].name : '',
  );

  const nodeRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (userCoin.name === secondCoinName) {
      setSecondCoinName('');
      setSecondCoinPrice(0);
    }
    setFirstCoinPrice(userCoin.price);
    setFirstCoinName(userCoin.name);
  }, [userCoin]);

  const onFirstCoinPriceChange = (val: number): void => {
    setFirstCoinPrice(val);
  };
  //react synthetic target event
  const onFirstCoinNameChange = (e: any): void => {
    if (nodeRef && nodeRef.current) {
      nodeRef.current.focus();
      console.log(nodeRef.current);
    }
    if (e.target.value === secondCoinName) {
      setSecondCoinName('');
      setSecondCoinPrice(0);
    }

    setFirstCoinName(e.target.value);
    setFirstCoinPrice(coins.find((coin) => coin.name === e.target.value)?.price!);
  };

  const onSecondCoinNameChange = (e: any): void => {
    if (e.target.value === firstCoinName) {
      setFirstCoinName('');
      setFirstCoinPrice(0);
    }
    setSecondCoinName(e.target.value);
    setSecondCoinPrice(coins.find((coin) => coin.name === e.target.value)?.price!);
  };

  const onSecondCoinPriceChange = (val: number): void => {
    setSecondCoinPrice(val);
  };

  console.log(userCoin.price, firstCoinPrice);
  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <div className={classes.inputWrapper}>
          <FormControl>
            <TextField
              label="Сумма"
              variant="outlined"
              value={firstCoinPrice || ''}
              onChange={(e) => onFirstCoinPriceChange(Number(e.target.value))}
            />
          </FormControl>
          <FormControl variant="outlined" style={{ minWidth: 100 }}>
            <InputLabel id="demo-simple-select-outlined-label">Валюта</InputLabel>
            <Select
              label="Валюта"
              value={firstCoinName || ''}
              ref={nodeRef}
              onChange={(e) => onFirstCoinNameChange(e)}>
              {coins.map((coin, id) => (
                <MenuItem key={id} value={coin.name}>
                  {coin.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className={classes.inputWrapper}>
          <FormControl>
            <TextField
              variant="outlined"
              label="Сумма"
              value={secondCoinPrice || ''}
              onChange={(e) => onSecondCoinPriceChange(Number(e.target.value))}
            />
          </FormControl>
          <FormControl variant="outlined" style={{ minWidth: 100 }}>
            <InputLabel>Валюта</InputLabel>
            <Select
              label="Валюта"
              variant="outlined"
              value={secondCoinName || ''}
              onChange={(e) => onSecondCoinNameChange(e)}>
              {coins.map((coin, id) => (
                <MenuItem key={id} value={coin.name}>
                  {coin.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Paper>
    </>
  );
};

export default ConvertBlock;
