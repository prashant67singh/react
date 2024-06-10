const Input = ({
  label,
  amount = 0,
  currencyList =["inr","usd"],
  currencySelected,
  onCurrencyChange,
  changeAmount,
}) => {
  return (
    <div className="w-5/6 h-1/4 flex  flex-col flex-wrap justify-center bg-white rounded-lg my-2">
      <div className="flex flex-wrap justify-between mx-5 text-gray-400">
        <div className="text-2xl font-light">{label}</div>
        <div className="text-2xl font-light">Currency Type</div>
      </div>
      <div className="flex justify-between mx-5 mt-6">
        <input
          type="number"
          className="w-2/4 h-10  outline-none text-xl"
          placeholder="number"
          step={5}
          value={amount}
          onChange={(e)=>{ changeAmount(Number(e.target.value))}}
        />
        <select
          className="w-20 h-10 outline-none bg-gray-200 rounded-lg px-3 text-xl"
          value={currencySelected}
          onChange={(e) => {
            onCurrencyChange(e.target.value);
          }}
        >
          {currencyList.map((currency) => {
             return <option key={currency} value={currency}>{currency}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default Input;
