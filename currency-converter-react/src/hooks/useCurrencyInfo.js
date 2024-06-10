import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    console.log(currency);
  let [currencyData, setCurrencyData] = useState({});
  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyData(data[currency]);
      });
  }, [currency]);

  return currencyData;
};

export default useCurrencyInfo;
