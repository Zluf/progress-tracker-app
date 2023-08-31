import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const entriesSlice = createSlice({
  name: "entries",
  initialState: {
    entries: [],
  },
  reducers: {
    // replaceCart(state, action) {
    //   state.totalQuantity = action.payload.totalQuantity;
    //   state.items = action.payload.items;
    // },
  },
});

const store = configureStore({
  reducer: { entries: entriesSlice.reducer },
});

export const cartActions = entriesSlice.actions;

export default store;
