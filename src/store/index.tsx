import create from "zustand";
import { ICar } from "../interfaces";

const useStore = create((set: any) => ({
  layout: {
    filters: null,
    email: "",
  },
  selectedCar: null,
  filters: {},
  setFilters: (data: any) => set(() => ({ filters: data })),
  setSelectedCar: (data: ICar) => set(() => ({ selectedCar: data })),
  setLayout: (data: any) => set(() => ({ layout: data })),
}));
export default useStore;
