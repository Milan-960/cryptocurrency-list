import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { homeStore } from "../Store/homeStore";

export const Home = () => {
  const store = homeStore();

  useEffect(() => {
    store.fetchCoins();
  }, []);

  return (
    <div>
      <h1>Test</h1>
      <input type="text" value={store.query} onChange={store.setQuery} />
      {store.coins.map((coin) => {
        return (
          <div key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name}</Link>
          </div>
        );
      })}
    </div>
  );
};
