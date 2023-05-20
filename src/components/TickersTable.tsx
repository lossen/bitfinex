import React from "react";
import { Ticker } from "../types";
import { Link } from "react-router-dom";

type Props = {
  tickers: Ticker[];
};
const TickersTable = ({ tickers }: Props) => {
  return (
    <table className="styled-table fixed-header-table">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Bid</th>
          <th>Last price</th>
          <th>Daily volume</th>
          <th>Daily high</th>
          <th>Daily low</th>
        </tr>
      </thead>
      <tbody className="scrollable-body">
        {tickers.map(
          ([
            symbol,
            bid,
            bidSize,
            ask,
            askSize,
            dailyChange,
            dailyChangeRelative,
            lastPrice,
            volume,
            high,
            low,
          ]) => {
            return (
              <tr className="even-row" key={`ticker-${symbol}`}>
                <td>
                  <Link to={`/ticker-item/${symbol}`}>{symbol}</Link>
                </td>
                <td>{bid}</td>
                <td>{lastPrice}</td>
                <td>{volume}</td>
                <td>{high}</td>
                <td>{low}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default TickersTable;
