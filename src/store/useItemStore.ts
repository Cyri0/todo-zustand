import { create } from "zustand";
import type { ItemType } from "../types/Item";

type ItemStoreType = {
    items: ItemType[],
    addItem: (item:ItemType)=>void,
    removeItem: (id: string)=>void,
    toggleItem: (id: string)=>void
}

export const useItemStore = create<ItemStoreType>((set)=>({
    items: [],
    addItem: (item) => set((state) => ({items: [item, ...state.items]})),
    removeItem: (id) => set((state) => ({items: state.items.filter(item => item.id !== id)})),
    toggleItem: (id) => set((state) => ({items: state.items.map(item => (item.id === id) ? {...item, isDone: !item.isDone} : item)})),
}))