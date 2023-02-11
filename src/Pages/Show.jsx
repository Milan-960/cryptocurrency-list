import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import { showStore } from "../Store/showStore";
import { Header } from "../Components/Header";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Show = () => {
  const store = showStore();
  const params = useParams();

  useEffect(() => {
    store.fetchData(params.id);
  }, []);

  if (!store) return <></>;

  return (
    <div>
      <Header back />
      <div className="custom-maxWidth">
        <header className="flex flex-col py-10 items-center ">
          <img className="w-24 md:w-52" src={store.imageLarge} alt="" />
          <h2 className="mt-5">
            {store.name} ({store.symbol})
          </h2>
        </header>
        <div className="flex flex-col py-10 items-center">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={store.graphData}
              width={500}
              height={400}
              margin={{
                top: 10,
                right: 40,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Price"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="custom-maxWidthItem">
          <h2 className="text-2xl text-gray-900 mb-2 ||">Market Data</h2>
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex justify-between py-4 border-b border-gray-500">
              <h3>Market Cap</h3>
              <p>{store.market_Cap_rank}</p>
            </div>
            <div className="flex justify-between py-4 border-b border-gray-500">
              <h3>24h high</h3>
              <p>${store.high24h}</p>
            </div>
            <div className="flex justify-between py-4 border-b border-gray-500">
              <h3>24h low</h3>
              <p>${store.low24h}</p>
            </div>
            <div className="flex justify-between py-4 border-b border-gray-500">
              <h3>Circulating supply</h3>
              <p>${store.circulatingSupply}</p>
            </div>
            <div className="flex justify-between py-4 border-b border-gray-500">
              <h3>Current Price</h3>
              <p>${store.currentPrice}</p>
            </div>
            <div className="flex justify-between">
              <h3>1y change</h3>
              <p>${store.priceChangePercentage}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
