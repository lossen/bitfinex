import axios from "axios";

const baseUrl = "/"; // Domain
const TICKERS_PATH = "tickers";
const TRADES_PATH = "trades";
const CANDLES_PATH = "candles";

const axiosClient = (pathParams: string, queryParams?: string) =>
  axios.get(`${baseUrl}${pathParams}?${queryParams}`);

export const fetchTickers = async () => {
  const { data } = await axiosClient(TICKERS_PATH, `symbols=ALL`);
  return data;
};
export const fetchTrades = async (symbol: string, limit = 10) => {
  const { data } = await axiosClient(
    `${TRADES_PATH}/${symbol}/hist`,
    `limit=${limit}`
  );
  return data;
};
export const fetchCandles = async (symbol: string, limit = 10) => {
  const { data } = await axiosClient(
    `${CANDLES_PATH}/trade%3A1m%3A${symbol}/hist`,
    `limit=${limit}`
  );
  return data;
};
