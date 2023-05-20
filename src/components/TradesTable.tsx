import React from "react";
import { Trade } from "../types";
type Props = {
  trades: Trade[];
};
export default function TradesTable({ trades }: Props) {
  return (
    <table className="styled-table fixed-header-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Mts</th>
          <th>Amount</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {trades.map(([id, mts, amount, price]) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{mts}</td>
            <td>{amount}</td>
            <td>{price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
