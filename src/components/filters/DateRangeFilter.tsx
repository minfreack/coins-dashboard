import { DateRangePicker, DateRangePickerValue } from "@tremor/react"
import { es } from "date-fns/locale"

interface Props{
    selectedRange: DateRangePickerValue;
    setSelectedRange: (value: DateRangePickerValue) => void;

}

const DateRangeFilter = ({selectedRange, setSelectedRange}: Props) => {
    return (
        <DateRangePicker
            role="Filtro de fechas"
            className="w-full md:w-1/2"
            enableSelect={false}
            locale={es}
            value={selectedRange} 
            onValueChange={setSelectedRange}
            maxDate={new Date()}
        />
    )
}

export default DateRangeFilter