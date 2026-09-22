import { create } from "zustand";
import type { ItemType } from "../types/Item";

type ItemStoreType = {
    items: ItemType[],
    addItem: (item:ItemType)=>void
}

export const useItemStore = create<ItemStoreType>((set)=>({
    items: [],
    addItem: (item) => set((state) => ({items: [item, ...state.items]}))
}))