import { configureStore } from "@reduxjs/toolkit";
import bookmarksReducer from "./bookmarksSlice"
import quotesSlice from "./quotesSlice.jsx";
import tagsSlice from "./tagsSlice";

const store = configureStore({
    reducer: {
        bookmarks: bookmarksReducer,
        quotes: quotesSlice,
        tags: tagsSlice,
    }
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

