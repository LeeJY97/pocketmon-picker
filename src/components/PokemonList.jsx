import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import { usePokemon } from "../context/PokemonContext";
const PokemonList = () => {
  const pokemonContext = usePokemon();

  return (
    <>
      {pokemonContext.allPokemonList.map((pokemon, index) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            text="추가"
            action={pokemonContext.addPokemon}
          />
        );
      })}
    </>
  );
};

export default PokemonList;
