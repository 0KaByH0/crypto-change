import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

import {TCoin} from '../../types';

type ICryptoTable = {
    items: TCoin[];
    classes: any;
}

const CryptoTable:React.FC<ICryptoTable> = ({items, classes}) =>{
    return (
        <>
        <Paper elevation={3} className={classes.paper}>
        <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">FullName</TableCell>
                    <TableCell align="left">Price</TableCell>
                    <TableCell align="left">Volume 24h</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {!items.length 
                    ? 'Загрузка...' 
                    : items.map((coin) => (
                    <TableRow key={coin.name}>
                      <TableCell component="th" scope="coin">
                        <Avatar src={coin.imageUrl} alt='Coin icon' />
                      </TableCell>
                      <TableCell align="left">{coin.name}</TableCell>
                      <TableCell align="left">{coin.fullName}</TableCell>
                      <TableCell align="left">${coin.price}</TableCell>
                      <TableCell align="left">${coin.volume24hour}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </Paper>
        </>
    );
}

export default CryptoTable;