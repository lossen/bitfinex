import React from "react";
import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import TickerItem from "./routes/ticker-item";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/ticker-item/:symbol",
      element: <TickerItem />,
    },
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
