import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})


    useEffect(() => {
        const currencyCode = currency.toLowerCase();

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyCode}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currencyCode])) // Access using the lowercase key
    }, [currency])
    console.log(data);
    return data

}

export default useCurrencyInfo;