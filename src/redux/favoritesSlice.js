import { createSlice } from "@reduxjs/toolkit";

const favoritesInitialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesInitialState,
  reducers: {
    toggleFavorite(state, action) {
      const camperId = action.payload;
      if (state.favorites.includes(camperId)) {
        state.favorites = state.favorites.filter((id) => id !== camperId);
      } else {
        state.favorites.push(camperId);
      }

      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    loadFavorites(state) {
      const savedFavorites = localStorage.getItem("favorites");
      if (savedFavorites) {
        state.favorites = JSON.parse(savedFavorites);
      }
    },
  },
});

export const { toggleFavorite, loadFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
