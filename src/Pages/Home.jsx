import React, { useEffect } from "react";
import { homeStore } from "../Store/homeStore";

export const Home = () => {
  const store = homeStore();

  useEffect(() => {
    store.fetchCoin();
  }, []);

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};
