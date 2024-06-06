import { AreaChart } from "@tremor/react";

interface Props{
    data: {
        Fecha: string;
        Valor: number;
    }[]
}

const RangeValueAreaChart = ({data}: Props) => {

    const dataFormatter = (number: number) => Intl.NumberFormat('us').format(number).toString();

    return (
        <div className="bg-[#333333] bg-opacity-30 py-10 shadow-2xl rounded-lg px-10">
            <h2 className="text-lg font-medium">Valor de la moneda</h2>
            <AreaChart
                className="h-80"
                data={data || []}
                index="Fecha"
                categories={['Valor']}
                colors={['indigo', 'rose']}
                valueFormatter={dataFormatter}
                yAxisWidth={100}
            />
        </div>
    )
}

export default RangeValueAreaChart;