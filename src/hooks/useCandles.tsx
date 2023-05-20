import { fetchCandles } from "../api/api";

export default function useCandles() {
  const getCandles = async (symbol: string) => {
    return await fetchCandles(symbol);
  };

  return { getCandles };
}
