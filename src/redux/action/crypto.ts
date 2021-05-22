import axios from 'axios';
import { TCoin } from '../../types';


const fetchCrypto = (payload: TCoin[])=> {
    return {    
        type: "FETCH_CRYPTO",
        payload
    }
}

export const comparePrices = (payload: number[])=>{
    return {    
        type: "COMPARE_PRICES",
        payload 
    }
}

export const getOldPrices = ()=>{
    return {    
        type: "GET_OLD_PRICE",
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
            dispatch(comparePrices(coins.map(i=>i.price)))
            dispatch(fetchCrypto(coins));
        })
    }
}
