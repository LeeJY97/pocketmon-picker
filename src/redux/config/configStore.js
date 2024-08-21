import { configureStore } from "@reduxjs/toolkit";
import selectedIndexSlice from "../slices/selectedIndexSlice";

const store = configureStore({
  reducer: {
    selectedIndex: selectedIndexSlice,
  }
})

export default store;