import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { homeStore } from "../Store/homeStore";
import { Header } from "../Components/Header";

import BTC from "../Assets/bitcoin.webp";

export const Home = () => {
  const store = homeStore();

  useEffect(() => {
    if (store.trending.length === 0) store.fetchCoins();
  }, []);

  return (
    <div>
      <div className="banner">
        <Header />
        <div className="text-center py-8 || content custom-maxWidth">
          <h1 className="text-2xl mb-2 lg:text-5xl text-center">
            Drive your crypto investments to success
            <br /> with our real-time tracking app.
          </h1>
          <p className="mb-6">
            Track crypto prices in real-time with our user-friendly app. Get
            market insights, set alerts, and stay informed on latest
            developments.
            <br />
            Take control of your investments and achieve financial goals.
          </p>
          <div className="search">
            <span className="block font-bold mb-2">Search for a coin:</span>
            <input
              className=" appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:border-gray-500 max-w-lg"
              type="text"
              value={store.query}
              onChange={store.setQuery}
              placeholder="Search for a coin"
            />
          </div>
        </div>
      </div>
      <div>
        <section className="custom-maxWidth">
          <div className="py-10 custom-maxWidthItem">
            <h2 className="text-2xl mb-2 ||">Trending Coins</h2>
            {store.coins.map((coin) => {
              return (
                <div key={coin.id}>
                  <Link to={`/${coin.id}`}>
                    <div className="flex justify-between mb-5 items-center py-1 px-4 hover:scale-105 duration-500 rounded-lg shadow-indigo-50 shadow-md">
                      <div className="flex gap-4 items-center">
                        <img
                          className="w-16"
                          src={coin.image}
                          alt={coin.image}
                        />
                        <div className="pt-2">
                          <h1>{coin.name}</h1>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="flex items-center gap-1 -ml-6 text-xl">
                          <img className="w-5 h-5" src={BTC} alt="" />
                          {coin.priceBtc} BTC
                        </span>
                        <span className="text-sm text-gray-500">
                          ({coin.priceUsd} USD)
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
