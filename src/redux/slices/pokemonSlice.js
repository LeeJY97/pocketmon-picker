import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../mock";

const initialPokemonList = MOCK_DATA;
const initialItemPerPage = 20;

const planMap = {
  'free': { maxDashboardLength: 6 },
  'standard': { maxDashboardLength: 8 },
  'premium': { maxDashboardLength: 30 },
}

const getInitialPageButtons = () => {
  const length = Math.ceil(initialPokemonList.length / initialItemPerPage);
  return Array.from({ length }, (_, index) => index + 1);
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    allPokemonList: [...initialPokemonList],
    selectedPokemon: [],
    selectedDetail: 0,
    plan: 'none',
    maxDashboardLength: 6,
    itemsPerPage: initialItemPerPage,
    page: 1,
    buttonList: getInitialPageButtons(),
    pageItems: [],
  },
  reducers: {
    setPageItems: (state, action) => {
      const page = action.payload;
      const startIndex = (page - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;

      state.page = page;
      state.pageItems = state.allPokemonList.slice(startIndex, endIndex);
      // state.pageItems = allPokemonList.slice(state.page, state.)

    },
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
      const pokemon = action.payload;

      if (state.selectedPokemon.length >= state.maxDashboardLength) {
        alert(`${state.maxDashboardLength}개 이상하려면 돈내야됨`);
      } else {
        state.selectedPokemon.includes(pokemon)
          ? alert("중복")
          : state.selectedPokemon.push(pokemon);
      }
    },

    removePokemon: (state, action) => {
      const removePokemon = action.payload;
      const removeArray = state.selectedPokemon.filter((pokemon) => pokemon.id !== removePokemon.id);
      state.selectedPokemon = removeArray;
    }
  }
})

export const { setPlan, addPokemon, removePokemon, setDetail, setPageItems } = pokemonSlice.actions;
export default pokemonSlice.reducer;