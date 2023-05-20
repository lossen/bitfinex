import React, { useEffect, useState } from "react";
import CurrenciesHeader from "../components/CurrenciesHeader";
import TickersTable from "../components/TickersTable";
import { currencies } from "../constants";
import useTickers from "../hooks/useTickers";
import { Ticker } from "../types";

export default function Root() {
  const [tickers, setTickers] = useState<Ticker[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string>(
    currencies[0]
  );

  const getData = async (selectedCurrency: string) => {
    setTickers(await getTickersByCurrency(selectedCurrency));
  };

  useEffect(() => {
    getData(selectedCurrency);
  }, [selectedCurrency]);

  const { getTickersByCurrency } = useTickers();

  const handleClick = async (symbol: string) => {
    setSelectedCurrency(symbol);
  };
  return (
    <div className="container">
      <CurrenciesHeader
        currencies={currencies}
        handleClick={handleClick}
        selectedCurrency={selectedCurrency}
      />
      <TickersTable tickers={tickers} />
    </div>
  );
}
