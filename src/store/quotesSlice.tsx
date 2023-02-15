import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { quotesData } from "../components/Quotes";

export enum Status {
  LOADING = "loading",
  IDLE = "idle",
  ERROR = "error",
}

const initialState: {
  data: quotesData[];
  tag: string;
  status: Status;
} = {
  data: [],
  status: Status.IDLE,
  tag: "",
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state, action) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.tag = action.payload.name;
        state.status = Status.IDLE;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.status = Status.ERROR;
      })
  },
});

export default quotesSlice.reducer;

export const fetchQuotes = createAsyncThunk("quotes/fetchQuotes", async (name: string) => {
  const res = await fetch(`https://api.quotable.io/random?tags=${name}`);
  const data = await res.json();
  return {data, name}
});

