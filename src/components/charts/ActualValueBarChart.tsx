import { BarChart } from "@tremor/react";

interface Props {
    data: {
        name: string;
        'Valor': number;
    }[]
}

const ActualValueBarChart = ({ data }: Props) => {

    const dataFormatter = (number: number) => Intl.NumberFormat('us').format(number).toString();
    return (
        <div className="bg-[#333333] bg-opacity-30 py-10 shadow-2xl rounded-lg px-10">
            <h2 className="text-lg font-medium">Valor de la moneda</h2>
            <BarChart
                data={data || []}
                index="name"
                categories={['Valor']}
                colors={['violet']}
                valueFormatter={dataFormatter}
                yAxisWidth={100}
            />
        </div>

    )
}

export default ActualValueBarChart;