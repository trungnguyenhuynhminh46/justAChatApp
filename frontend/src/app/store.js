import { configureStore } from "@reduxjs/toolkit";
import rightSideBarReducer from "./slices/rightSideBarSlice";

export const store = configureStore({
  reducer: {
    rightSideBar: rightSideBarReducer,
  },
});
