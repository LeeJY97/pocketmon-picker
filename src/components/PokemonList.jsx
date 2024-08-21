import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList, text, action, navigateToDetail }) => {
  return (
    <>
      {pokemonList.map((pokemon, index) => {
        return (
          <PokemonCard
            key={pokemon.id - 1}
            {...pokemon}
            text={text}
            index={index}
            action={action}
            navigateToDetail={navigateToDetail}
          />
        );
      })}
    </>
  );
};

export default PokemonList;
