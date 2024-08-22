import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../mock";

const initialPokemonList = MOCK_DATA;


const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    allPokemonList: [...initialPokemonList],
    selectedPokemon: [],
  },
  reducers: {
    addPokemon: (state, action) => {
      const pokemonId = action.payload;

      if (state.selectedPokemon.length >= 6) {
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

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;