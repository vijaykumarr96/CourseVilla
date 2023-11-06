import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await getDoc(collection(db, "courses"));
  response.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});

// Create a data slice
const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default dataSlice.reducer;
