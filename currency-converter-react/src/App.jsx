import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";
import backgroundImage from "./assets/background-1.jpg";

import Input from "./components/Input";

function App() {
  let [fromCurrency, setFromCurrency] = useState("inr");
  let [toCurrency, setToCurrency] = useState("usd");
  let [amount, setAmount] = useState(0);
  let [convertedAmount, setConvertedAmount] = useState(0);
  let currency = useCurrencyInfo(fromCurrency);

  const currencyList = Object.keys(currency);

  const onAmountChangeHandler = (amnt) => {
    setAmount(amnt);
    let newAmnt = currency[toCurrency] * amnt;
    setConvertedAmount(newAmnt);
  };

  const onConvertedAmountChangeHandler = (amnt) => {
    setConvertedAmount(amnt);
    let newAmnt = amnt / currency[toCurrency];
    setAmount(newAmnt);
  };

  const onFromChangeHandler = (fromValue) => {
    setFromCurrency(fromValue);
    onAmountChangeHandler(amount);
  };

  const onToChangeHandler = (toValue) => {
    setToCurrency(toValue);
    onConvertedAmountChangeHandler(convertedAmount);
  };

  const onSwapHandler = ()=>{
    let toValue = toCurrency;
    let fromValue = fromCurrency;
    onFromChangeHandler(toValue);
    onToChangeHandler(fromValue);
  }

  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{
        background: `url(${backgroundImage}) no-repeat center center / cover`,
      }}
    >
      <div className="w-2/3 h-2/3 flex flex-col items-center justify-center bg-black bg-opacity-80 border-2 border-white rounded-xl drop-shadow-2xl">
        <Input
          label={"From"}
          amount={amount}
          currencyList={currencyList}
          onCurrencyChange={onFromChangeHandler}
          currencySelected={fromCurrency}
          changeAmount={onAmountChangeHandler}
        ></Input>
        <button className="text-white bg-blue-500 p-2 rounded-lg" onClick={onSwapHandler}>Swap</button>
        <Input
          label={"To"}
          amount={convertedAmount}
          currencyList={currencyList}
          onCurrencyChange={onToChangeHandler}
          currencySelected={toCurrency}
          changeAmount={onConvertedAmountChangeHandler}
        ></Input>
        <button className="w-2/3 text-2xl bg-blue-500 py-2 text-white rounded-xl mt-10">
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;
