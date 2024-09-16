import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchCampers } from "../campers-data-api";

const campersInitialState = {
  items: [],
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState: campersInitialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      }),
});

export const selectCampers = (state) => state.campers.items;

export const selectFilteredCampers = createSelector(
  [selectCampers, (state) => state.filters],
  (campers, filters) => {
    return campers.filter((camper) => {
      const matchesLocation = camper.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());
      const matchesAC = filters.AC ? camper.AC === filters.AC : true;
      const matchesAutomatic = filters.automatic
        ? camper.automatic === filters.automatic
        : true;
      const matchesKitchen = filters.kitchen
        ? camper.kitchen === filters.kitchen
        : true;
      const matchesTV = filters.TV ? camper.TV === filters.TV : true;
      const matchesBathroom = filters.bathroom
        ? camper.bathroom === filters.bathroom
        : true;
      const matchesForm = filters.form ? camper.form === filters.form : true;

      return (
        matchesLocation &&
        matchesAC &&
        matchesAutomatic &&
        matchesKitchen &&
        matchesTV &&
        matchesBathroom &&
        matchesForm
      );
    });
  }
);

export const campersReducer = campersSlice.reducer;
