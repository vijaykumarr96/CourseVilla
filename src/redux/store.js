import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/CourseSlice";
import searchReducer from "./features/inputSlice";
const store = configureStore({
  reducer: {
    data: dataReducer,
    inputSearch: searchReducer,
  },
});

export default store;
