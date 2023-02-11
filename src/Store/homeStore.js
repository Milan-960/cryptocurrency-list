import axios from "axios";
import { create } from "zustand";
import { Debounce } from "../Helpers/Debounc";

export const homeStore = create((set) => ({
  coins: [],
  trending: [],
  query: "",

  setQuery: (e) => {
    set({ query: e.target.value });
    homeStore.getState().searchCoins();
  },

  searchCoins: Debounce(async () => {
    const { query, trending } = homeStore.getState();

    if (query.length > 2) {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );

      const coins = res.data.coins.map((coin) => {
        return {
          name: coin.name,
          image: coin.large,
          id: coin.id,
        };
      });

      set({ coins });
    } else {
      set({ coins: trending });
    }
  }, 500),

  fetchCoins: async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );

    const coins = res.data.coins.map((coin) => {
      return {
        name: coin.item.name,
        image: coin.item.large,
        id: coin.item.id,
        priceBtc: coin.item.price_btc,
      };
    });

    set({ coins, trending: coins });
  },
}));
