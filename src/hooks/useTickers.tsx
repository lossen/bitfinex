import React, { useState } from "react";
import { fetchTickers } from "../api/api";
import { Ticker } from "../types";

export default function useTickers() {
  const [tickers, setTickers] = useState([]);

  const getTickers = async () => {
    const data = await fetchTickers();
    setTickers(data);
    return data;
  };

  const getTickersByCurrency = async (currency: string) => {
    const tickersData = tickers.length > 0 ? tickers : await getTickers();
    return tickersData.filter(([symbol]: Ticker) => symbol.includes(currency));
  };

  return { getTickersByCurrency };
}
