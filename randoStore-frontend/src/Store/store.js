import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCart = create(
  persist(
    (set, get) => ({
      cart: [],
      setCart: (items) => set({ cart: items }),
    }),
    {
      name: "cart", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export const useSearch = create((set) => ({
  search: "",
  setSearch: (string) => set(() => ({ search: string })),
}));
