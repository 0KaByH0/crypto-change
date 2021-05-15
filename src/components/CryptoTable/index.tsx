import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {TCoin} from '../../types';

type ICryptoTable = {
    coins: TCoin[];
    classes: any;
    loading: boolean;
    setPrice: (coin: TCoin)=>(void);
}

const CryptoTable:React.FC<ICryptoTable> = ({coins, loading, classes, setPrice}) =>{

  const onClickPrice = (coin: TCoin) => {
    setPrice(coin);
  }

    return (
        <>
        <Paper elevation={3} className={classes.paper}>
        <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                  <TableCell align="left"></TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">FullName</TableCell>
                    <TableCell align="left">Price</TableCell>
                    <TableCell align="left">Volume 24h</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {!loading 
                  ?
                    coins.map((coin, id) => (
                    <TableRow key={`${coin.name}`+`${id}`} className={classes.tableRow} onClick={()=>onClickPrice(coin)} >
                      <TableCell component="th" scope="coin">
                        <Avatar src={coin.imageUrl} alt='Coin icon' />
                      </TableCell>
                      <TableCell align="left">{coin.name}</TableCell>
                      <TableCell align="left">{coin.fullName}</TableCell>
                      <TableCell align="left">${coin.price}</TableCell>
                      <TableCell align="left">${coin.volume24hour}</TableCell>
                    </TableRow>
                    ))
                    :
                      (<TableRow >
                        <TableCell component="th" scope="coin">
                          Загрузка коинов
                        </TableCell>
                      </TableRow>)
                  }
                </TableBody>
              </Table>
            </TableContainer>
        </Paper>
        </>
    );
}

export default CryptoTable;