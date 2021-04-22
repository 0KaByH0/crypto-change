import React from 'react';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';

type IConvertBlock = {
    classes: any;
}

const ConvertBlock: React.FC<IConvertBlock> = ({ classes }) => {

    return (
        <>
        <div>
            <Paper elevation={3} className={classes.paper}>
                <div className={classes.inputWrapper}>
                    <FormControl >
                        <TextField label='Сумма' />
                    </FormControl>
                    <FormControl style={{ minWidth: 75 }}>
                        <InputLabel>
                            Валюта
                </InputLabel>
                        <Select value={10}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className={classes.inputWrapper}>
                    <FormControl >
                        <TextField label='Сумма' />
                    </FormControl>
                    <FormControl style={{ minWidth: 75 }}>
                        <InputLabel>
                            Валюта
                </InputLabel>
                        <Select value={10}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </Paper>
        </div>
        </>
    );
}

export default ConvertBlock;