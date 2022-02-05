import create from "zustand";

const useStore = create((set: any) => ({
  selectedCar: null,
  filters: {},
  setFilters: (data: any) => set((state: any) => ({ filters: data })),
  setSelectedCar: (data: any) => set((state: any) => ({ selectedCar: data })),
}));
export default useStore;
