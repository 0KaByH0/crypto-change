export type TCoin = {
    name: string;
    fullName: string;
    imageUrl: string;
    price: number;
    volume24hour: number; 
  }

export type CryptoState = {
    allCoins: TCoin[]
    loading: boolean,
  }
  
export type CryptoAction = {
    type: string
    payload: TCoin[]
  }
  
export type DispatchType = (args: CryptoAction) => CryptoAction