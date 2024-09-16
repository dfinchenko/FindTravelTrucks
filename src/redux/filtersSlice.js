import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  location: "",
  AC: false,
  automatic: false,
  kitchen: false,
  TV: false,
  bathroom: false,
  form: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilters(state, action) {
      const newState = { ...state, ...action.payload };
      localStorage.setItem("filters", JSON.stringify(newState));
      return newState;
    },
    resetFilters() {
      localStorage.removeItem("filters");
      return filtersInitialState;
    },
    loadFilters(state) {
      const savedFilters = localStorage.getItem("filters");
      if (savedFilters) {
        return JSON.parse(savedFilters);
      }
      return state;
    },
  },
});

export const { setFilters, resetFilters, loadFilters } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
