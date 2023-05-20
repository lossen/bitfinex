import React from "react";
import { Candle } from "../types";
type Props = {
  candles: Candle[];
};
export default function CandlesTable({ candles }: Props) {
  return (
    <table className="styled-table fixed-header-table">
      <thead>
        <tr>
          <th>MTS</th>
          <th>Mts</th>
          <th>First executio</th>
          <th>Last execution</th>
          <th>Highest execution</th>
          <th>Lowest execution</th>
          <th>Quantity of symbol traded</th>
        </tr>
      </thead>
      <tbody>
        {candles.map(([mts, open, close, high, low, volume], i) => (
          <tr key={`candle-${i}`}>
            <td>{mts}</td>
            <td>{open}</td>
            <td>{close}</td>
            <td>{high}</td>
            <td>{low}</td>
            <td>{volume}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
