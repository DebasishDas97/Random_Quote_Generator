import { createSlice } from "@reduxjs/toolkit";
import { quotesData } from "../components/Quotes";

const initialState: quotesData[] = JSON.parse(localStorage.getItem("bookmarks") || "[]")

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    add(state, action) {
      const itemInBookmark = state.find(
        (item) => item._id === action.payload._id
      );
      if (itemInBookmark === undefined) state.push(action.payload);
      localStorage.setItem("bookmarks", JSON.stringify(state));
    },

    remove(state, action) {
      const newState = [
        ...state.filter((item: quotesData) => item._id !== action.payload),
      ];
      localStorage.setItem("bookmarks", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { add, remove } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
