import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../mock";

const initialPokemonList = MOCK_DATA;


const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    allPokemonList: [...initialPokemonList],
    selectedPokemon: [],
    maxDashboardLength: 6,
    isPremium: false,
  },
  reducers: {
    setIsPremium: (state, action) => {
      console.log('action.payload', action.payload);
      state.isPremium = action.payload.isPremium;
      state.maxDashboardLength = action.payload.maxDashboardLength;
    },

    addPokemon: (state, action) => {
      const pokemonId = action.payload;

      if (state.selectedPokemon.length >= state.maxDashboardLength) {
        alert("6개 이상하려면 돈내야됨");
      } else {
        state.selectedPokemon.includes(pokemonId)
          ? alert("중복")
          : state.selectedPokemon.push(pokemonId);
      }
    },

    removePokemon: (state, action) => {
      const pokemonId = action.payload;
      const removeArray = state.selectedPokemon.filter((id) => id !== pokemonId);
      state.selectedPokemon = removeArray;
    }
  }
})

export const { setIsPremium, addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;