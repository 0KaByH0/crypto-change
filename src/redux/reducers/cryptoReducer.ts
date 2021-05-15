import {  CryptoAction, CryptoState } from "../../types";


const initialState: CryptoState = {
    allCoins: [],
    loading: true,
}

const crypto = (state:CryptoState = initialState, action: CryptoAction):CryptoState => {
    switch (action.type) {
        case "FETCH_CRYPTO":
            return {
                ...state,
                allCoins: action.payload === undefined ? [] : [...action.payload],
                loading: false
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        
        default:
            return state
    }


}

export default crypto;