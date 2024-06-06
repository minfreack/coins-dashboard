import { getCoinHistorialData, getCoinsMarketData } from "../services/api/coins"
import { useQuery } from 'react-query'
import {  DateRangePickerValue } from '@tremor/react';
import { Coin } from "../interfaces";
import {  useState } from "react";
import dayjs from 'dayjs';
import HistoricalBarChart from "../components/charts/HistoricalBarChart";
import ActualValueBarChart from "../components/charts/ActualValueBarChart";
import RangeValueAreaChart from "../components/charts/RangeValueAreaChart";
import SearchFilter from "../components/filters/searchFilter";
import DateRangeFilter from "../components/filters/DateRangeFilter";

export function Dashboard() {

    const [selectedCoin, setSelectedCoin] = useState<string>('')

    const [selectedRange, setSelectedRange] = useState<DateRangePickerValue>({
        to: new Date(),
        from: dayjs().subtract(7, 'days').toDate(),
    })

    const { data, isLoading } = useQuery(['coins', selectedCoin], () => getCoinsMarketData(selectedCoin))

    const { data: coinData } = useQuery(
        ['coin', selectedCoin, selectedRange],
        () => getCoinHistorialData(
            selectedCoin,
            dayjs(selectedRange.from).unix(),
            dayjs(selectedRange.to).unix()
        )
    )

    const chartdata = data?.map((coin: Coin) => ({
        name: coin.name,
        'Valor': coin.current_price
    }))

    const chartdata2 = data?.map((coin: Coin) => ({
        name: coin.name,
        'Mínimo histórico': coin.atl,
        'Máximo histórico': coin.ath
    }))

    const chartdata3 = coinData?.map((coin: number[]) => ({
        'Fecha': dayjs(coin[0]).format('DD/MM/YY'),
        'Valor': coin[1],
    }))

    return (
        <div className="container m-auto px-6 md:px-20 pb-10 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
            <h1 aria-description="Cashboard dashboard" className="md:col-span-2 text-2xl pt-10 font-medium">Dashboard Coins</h1>
            <div className="flex flex-col md:flex-row gap-y-2 md:col-span-2 pb-10 pt-6 gap-x-10">
                <SearchFilter selectedCoin={selectedCoin} setSelectedCoin={setSelectedCoin} />
                {
                    selectedCoin !== '' && (
                        <DateRangeFilter selectedRange={selectedRange} setSelectedRange={setSelectedRange} />
                    )
                }
            </div>
            {
                isLoading ? (
                    <p className="text-center col-span-2">Cargando...</p>

                ) : (
                    <>
                        {
                            selectedCoin !== '' ? (
                                <RangeValueAreaChart data={chartdata3 || []} />
                            ) : (
                                <ActualValueBarChart data={chartdata || []} />
                            )
                        }
                        <HistoricalBarChart data={chartdata2 || []} />
                    </>
                )
            }

        </div>
    )
}
