import axios from 'axios';
import { TCoin } from '../../types';


const fetchCrypto = (payload: TCoin[])=> {
    return {    
        type: "FETCH_CRYPTO",
        payload
    }
}

const setLoading = ()=> {
    return {    
        type: "SET_LOADING",
    }
}

export const fetchCryptoAsync = ()=> {
    return (dispatch: any)=>{
        dispatch(setLoading())
        return axios
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
                return obj
            });
            dispatch(fetchCrypto(coins));
        })
    }
}
