import { createContext, useContext, useState } from "react";
import MOCK_DATA from "../mock";

const PokemonContext = createContext();

export function usePokemon() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [allPokemonList] = useState(() => MOCK_DATA);

  const addPokemon = (pokemonId) => {
    if (selectedPokemon.length >= 6) {
      alert("6개 이상하려면 돈내야됨");
      return;
    }

    selectedPokemon.includes(pokemonId)
      ? alert("중복")
      : setSelectedPokemon([...selectedPokemon, pokemonId]);
  };

  const removePokemon = (pokemonId) => {
    console.log("selectedPokemon", selectedPokemon);
    const removeArray = selectedPokemon.filter((id) => id !== pokemonId);
    setSelectedPokemon([...removeArray]);
  };

  return (
    <PokemonContext.Provider
      value={{ allPokemonList, selectedPokemon, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
