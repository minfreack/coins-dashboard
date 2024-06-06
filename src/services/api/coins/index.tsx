import { Coin } from "../../../interfaces";
import { toast } from "react-hot-toast";
const apiKey = import.meta.env.VITE_COIN_GECKO_API_KEY;

export const getCoinsMarketData = async(id:string = '') => {
    try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&per_page=15${id && `&ids=${id}`}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-cg-demo-api-key': apiKey
            }
        })
        const data: Coin[] = await res.json()
        return data   
    } catch (error) {        
        toast.error('Ha habido un error al obtener las monedas por favor intenta más tarde.')
    }
}

export const getCoinHistorialData = async(id:string = '', from:number, to:number) => {
    try {
        if(!id) return
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=mxn${from && `&from=${from}`}${to && `&to=${to}`}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-cg-demo-api-key': apiKey
            }
        })
        const data = await res.json()        
        return data.prices   
    } catch (error) {
        toast.error('Ha habido un error al obtener el historial por favor intenta más tarde.')
    }
}