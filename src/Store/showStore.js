import axios from "axios";
import { create } from "zustand";

export const showStore = create((set) => ({
  graphData: [],

  fetchData: async (id) => {
    const [graphRes, dataRes] = await Promise.all([
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=121`
      ),
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`
      ),
    ]);

    const graphData = graphRes.data.prices.map((price) => {
      const [timestamp, p] = price;
      const date = new Date(timestamp).toLocaleDateString("en-us");
      return {
        Date: date,
        Price: p,
      };
    });

    console.log(dataRes.data);
    const { name, symbol, image, market_data, market_Cap_rank } = dataRes.data;
    const imageLarge = image.large;
    const high24h = market_data.high_24h.usd;
    const low24h = market_data.low_24h.usd;
    const circulatingSupply = market_data.circulating_supply;
    const currentPrice = market_data.current_price.usd;
    const priceChangePercentage =
      market_data.price_change_percentage_1y.toFixed(2);

    set({
      graphData,
      name,
      symbol,
      imageLarge,
      high24h,
      market_Cap_rank,
      low24h,
      circulatingSupply,
      currentPrice,
      priceChangePercentage,
    });
  },
}));

export default showStore;
