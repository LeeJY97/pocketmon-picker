import React from "react";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";
import { addPokemon } from "../redux/slices/pokemonSlice";

const PokemonList = () => {
  const { allPokemonList, selectedPokemon } = useSelector(
    (state) => state.pokemon
  );

  return (
    <>
      {allPokemonList.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            text="추가"
            action={addPokemon}
          />
        );
      })}
    </>
  );
};

export default PokemonList;
