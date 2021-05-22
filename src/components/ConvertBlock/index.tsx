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
  const [firstAmountCoin, setFirstAmountCoin] = React.useState<number | string>(
    coins[0] !== undefined ? coins[0].price : '',
  );
  const [firstCoinName, setFirstCoinName] = React.useState<string>(
    coins[0] !== undefined ? coins[0].name : '',
  );
  const [secondAmountCoin, setSecondAmountCoin] = React.useState<number | string>(
    coins[1] !== undefined ? coins[1].price : '',
  );
  const [secondCoinName, setSecondCoinName] = React.useState<string>(
    coins[1] !== undefined ? coins[1].name : '',
  );

  const nodeRef = React.useRef<HTMLDivElement>(null);
  let coinPrice = (name: string) => coins.find((coin) => coin.name === name)?.price!;

  React.useEffect(() => {
    setFirstAmountCoin(userCoin.price);
    setFirstCoinName(userCoin.name);
    newSecAmount(userCoin.price, 1, coinPrice(secondCoinName));

    if (userCoin.name === secondCoinName) {
      setSecondCoinName('');
      setSecondAmountCoin(0);
    }
  }, [userCoin]);

  //react synthetic target event
  const onFirstCoinNameChange = (e: any): void => {
    if (nodeRef && nodeRef.current) {
      nodeRef.current.focus();
    }
    setFirstCoinName(e.target.value);
    setFirstAmountCoin(coinPrice(e.target.value));
    newSecAmount(1, coinPrice(e.target.value), coinPrice(secondCoinName));
    if (e.target.value === secondCoinName) {
      setSecondCoinName('');
      setSecondAmountCoin(0);
    }
  };

  const onFirstAmountCoinChange = (val: number): void => {
    console.log(val);
    setFirstAmountCoin(val);
    newSecAmount(val, coinPrice(firstCoinName), coinPrice(secondCoinName));
  };

  const onSecondCoinNameChange = (e: any): void => {
    setSecondCoinName(e.target.value);
    newSecAmount(firstAmountCoin, coinPrice(firstCoinName), coinPrice(e.target.value));
    if (e.target.value === firstCoinName) {
      setFirstCoinName('');
      setFirstAmountCoin(0);
    }
  };

  const onSecondAmountCoinChange = (val: number): void => {
    setSecondAmountCoin(val);
    newFirstAmount(val, coinPrice(firstCoinName), coinPrice(secondCoinName));
  };

  ////////////////////////////////////////////CONVERTING//////////////////
  const newFirstAmount = (secVal: number | string, firstPrice: number, secPrice: number) => {
    let newAmount: number = (Number(secVal) * Number(secPrice)) / Number(firstPrice);
    //console.log(firstAmountCoin, firstPrice, secPrice, val, newPrice);
    setFirstAmountCoin(newAmount);
  };

  const newSecAmount = (val: number | string, firstPrice: number, secPrice: number) => {
    let newAmount: number = (Number(val) * Number(firstPrice)) / Number(secPrice);
    console.log(firstAmountCoin, firstPrice, secPrice, val, newAmount);
    setSecondAmountCoin(newAmount);
  };

  //console.log(userCoin.price, firstAmountCoin);
  //console.log(userCoin.price, secondAmountCoin);
  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <div className={classes.inputWrapper}>
          <FormControl>
            <TextField
              label="Сумма"
              variant="outlined"
              value={firstAmountCoin || ''}
              onChange={(e) => onFirstAmountCoinChange(Number(e.target.value))}
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
              value={secondAmountCoin || ''}
              onChange={(e) => onSecondAmountCoinChange(Number(e.target.value))}
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

export default React.memo(ConvertBlock);
