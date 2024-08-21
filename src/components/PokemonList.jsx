import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import { PokemonContext } from "../context/PokemonContext";
const PokemonList = ({ text, action }) => {
  const pokemonContext = useContext(PokemonContext);
  return (
    <>
      {pokemonContext.allPokemonList.map((pokemon, index) => {
        return (
          <PokemonCard
            key={pokemon.id - 1}
            {...pokemon}
            text={text}
            index={index}
            action={action}
          />
        );
      })}
    </>
  );
};

export default PokemonList;
