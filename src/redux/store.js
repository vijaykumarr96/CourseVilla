import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/CourseSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
