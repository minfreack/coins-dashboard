import { SearchSelect, SearchSelectItem } from "@tremor/react"
import { Coin } from "../../interfaces"
import { useQuery } from "react-query"
import { getCoinsMarketData } from "../../services/api/coins"

interface Props {
    selectedCoin: string;
    setSelectedCoin: (value: string) => void;

}

const SearchFilter = ({selectedCoin, setSelectedCoin}: Props) => {

    const {data} = useQuery(['coins'], () => getCoinsMarketData())


    return (
        <SearchSelect role="Filtro de búsqueda por moneda" className="w-full md:w-1/2 " value={selectedCoin} onValueChange={setSelectedCoin}>
        {data?.map((coin: Coin) => (
            <SearchSelectItem key={coin.id} value={coin.id}>{coin.name}</SearchSelectItem>
        ))}
        </SearchSelect>
    )
}

export default SearchFilter