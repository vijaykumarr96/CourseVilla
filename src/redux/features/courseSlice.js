import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const courseList = [];
    const response = await getDocs(collection(db, "1"));
    response.forEach((doc) => {
      courseList.push(doc.data());
    });
    return courseList;
  } catch (error) {
    throw Error(error);
  }
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
