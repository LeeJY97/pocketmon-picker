import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../mock";

const initialPokemonList = MOCK_DATA;

const planMap = {
  'free': { maxDashboardLength: 6 },
  'standard': { maxDashboardLength: 8 },
  'premium': { maxDashboardLength: 30 },
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    allPokemonList: [...initialPokemonList],
    selectedPokemon: [],
    selectedDetail: 0,
    plan: 'none',
    maxDashboardLength: 6,
  },
  reducers: {
    setPlan: (state, action) => {
      state.plan = action.payload;
      state.maxDashboardLength = planMap[action.payload].maxDashboardLength
    },
    setDetail: (state, action) => {
      const pokemonId = action.payload.id;
      const startId = 1;
      const endId = state.allPokemonList.length;

      let showId = 0;

      switch (action.payload.type) {
        case 'prev':
          showId = pokemonId === startId ? endId : pokemonId - 1;
          break;
        case 'next':
          showId = pokemonId === endId ? startId : pokemonId + 1;
          break;
        default:
          showId = pokemonId;
      }

      state.selectedDetail = showId;
    },

    addPokemon: (state, action) => {
      const pokemonId = action.payload;

      if (state.selectedPokemon.length >= state.maxDashboardLength) {
        alert(`${state.maxDashboardLength}개 이상하려면 돈내야됨`);
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

export const { setPlan, addPokemon, removePokemon, setDetail } = pokemonSlice.actions;
export default pokemonSlice.reducer;