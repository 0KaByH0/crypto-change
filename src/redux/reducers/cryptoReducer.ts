import {  CryptoAction, CryptoState } from "../../types";


const initialState: CryptoState = {
    allCoins: [],
    allCoinsOldPrice: [],
    diff: [],
    loading: true,
}

const crypto = (state:CryptoState = initialState, action: CryptoAction):CryptoState => {
    switch (action.type) {
        case "FETCH_CRYPTO":
            return {
                ...state,
                allCoins: action.payload === undefined ? [] : [...action.payload],
                loading: false
            };
        case "GET_OLD_PRICE":
            return {
                ...state,
                allCoinsOldPrice: [...state.allCoins.map((i)=>i.price)],
            };
        case "COMPARE_PRICES":
            let newObj = {
                    ...state,
                    diff: state.allCoinsOldPrice[0] !== action.payload[0] 
                    ? [...state.allCoinsOldPrice.map((price, i)=>{return <any>action.payload[i]-price})] 
                    : [...state.diff],
                }
            
            return newObj;  
        case "SET_LOADING":
            let load = false
            if (!state.diff.includes(0)){
                load = true;
            }
            console.log(load)
            return {
                ...state,
                loading: load
            };
        
        default:
            return state
    }
}

export default crypto;