import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const entriesSlice = createSlice({
  name: "entries",
  initialState: { entries: [] as string[] },
  reducers: {
    addActivity(state, action) {
      state.entries = [...state.entries, action.payload];
    },
  },
});

const store = configureStore({
  reducer: { entries: entriesSlice.reducer },
});

export const entries = entriesSlice;
export default store;
