import create from "zustand";
import { ICar } from "../interfaces";

const useStore = create((set: any) => ({
  layout: {
    filters: null,
    email: "",
  },
  selectedCar: {
    id: 0,
    car: {
      name: "",
      transmission: "",
      brand: {
        name: "",
      },
      class: "",
      fuel: "",
      image: {
        large: "",
        medium: "",
        small: "",
      },
    },
    vendor: {
      logoUrl: "",
      name: "",
    },
    currency: "",
    pricing: {
      totalPrice: 0,
    },
  },
  filters: {},
  setFilters: (data: any) => set(() => ({ filters: data })),
  setSelectedCar: (data: ICar) => set(() => ({ selectedCar: data })),
  setLayout: (data: any) => set(() => ({ layout: data })),
}));
export default useStore;
