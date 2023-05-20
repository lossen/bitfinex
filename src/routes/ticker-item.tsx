import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTradesBySymbol from "../hooks/useTradesBySymbol";
import TradesTable from "../components/TradesTable";
import useCandles from "../hooks/useCandles";
import CandlesTable from "../components/CandlesTable";

const views = ["Trades", "Candles"];
export default function TickerItem() {
  const { symbol } = useParams();
  const { getTrades } = useTradesBySymbol();
  const { getCandles } = useCandles();
  const [trades, setTrades] = useState([]);
  const [candles, setCandles] = useState([]);
  const [currentView, setCurrentView] = useState<string>(views[0]);

  const getData = async () => {
    setTrades(await getTrades(symbol as string));
    setCandles(await getCandles(symbol as string));
  };
  useEffect(() => {
    getData();
  }, [symbol]);

  const viewsMap = {
    [views[0]]: <TradesTable trades={trades} />,
    [views[1]]: <CandlesTable candles={candles} />,
  };
  return (
    <div className="container">
      <h1>{symbol}</h1>
      <div>
        <div className="tabs">
          {views.map((view) => {
            const isActive = view === currentView ? "active" : "";
            return (
              <span
                key={view}
                onClick={() => setCurrentView(view)}
                className={`tab-item ${isActive}`}
              >
                {view}
              </span>
            );
          })}
        </div>
        {viewsMap[currentView]}
      </div>
    </div>
  );
}
