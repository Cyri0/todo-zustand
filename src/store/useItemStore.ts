import { create } from "zustand";

type ItemStoreType = {
    items: string[],
    addItem: (item:string)=>void
}

export const useItemStore = create<ItemStoreType>((set)=>({
    items: [],
    addItem: (item) => set((state) => ({items: [item, ...state.items]}))
}))