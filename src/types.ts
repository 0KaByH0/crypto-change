export type TCoin = {
    name: string;
    fullName: string;
    imageUrl: string;
    price: number;
    volume24hour: number; 
   //diff: number
  }

export type CryptoState = {
    allCoins: TCoin[]
    loading: boolean,

    allCoinsOldPrice: number[],
    diff: number[],
  }
  
export type CryptoAction = {
    type: string
    payload: any[]
  }
  
export type DispatchType = (args: CryptoAction) => CryptoAction