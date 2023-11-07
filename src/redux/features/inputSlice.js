import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "search",
  initialState: {
    text: "",
  },
  reducers: {
    updateInputSearch: (state, action) => {
      state.text = action.payload;
    },
  },
});
export const { updateInputSearch } = inputSlice.actions;
export default inputSlice.reducer;
