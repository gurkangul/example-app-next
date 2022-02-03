import create from "zustand";

const useStore = create((set: any) => ({
  filters: {},
  setFilters: (data: any) => set((state: any) => ({ filters: data })),
}));
export default useStore;
