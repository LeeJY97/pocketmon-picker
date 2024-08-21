import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const selectedIndexSlice = createSlice({
  name: 'selectedIndex',
  initialState,
  reducers: {
    addPokemon: (state = initialState, action) => {
      if (state.length >= 6) {
        alert("6개 이상하려면 돈내야됨");
        return state;
      }
      return [...state, action.payload];
    }
  }
})

export const { addPokemon } = selectedIndexSlice.actions;
export default selectedIndexSlice.reducer;