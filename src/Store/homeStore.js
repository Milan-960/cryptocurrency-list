import axios from "axios";
import { create } from "zustand";

export const homeStore = create((set) => ({
  fetchCoin: () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((res) => {
        set((state) => ({
          coins: res.data,
        }));
      });
  },
}));
