import { fetchTrades } from "../api/api";

export default function useTradesBySymbol() {
  const getTrades = async (symbol: string) => {
    return await fetchTrades(symbol);
  };
  return { getTrades };
}
