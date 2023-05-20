import React from "react";

type Props = {
  currencies: string[];
  handleClick: (currency: string) => void;
  selectedCurrency: string;
};
export default function CurrenciesHeader({
  currencies,
  handleClick,
  selectedCurrency,
}: Props) {
  return (
    <div className="tabs">
      {currencies.map((currency) => {
        const isActive = currency === selectedCurrency ? "active" : "";
        return (
          <div
            key={currency}
            className={`tab-item ${isActive}`}
            onClick={() => handleClick(currency)}
          >
            {currency}
          </div>
        );
      })}
    </div>
  );
}
