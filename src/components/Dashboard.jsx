import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import { usePokemon } from "../context/PokemonContext";

const StDashboard = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  gap: 20px;
`;

const Dashboard = ({ MAX_LENGTH = 6 }) => {
  const pokemonContext = usePokemon();

  const pokemonList = pokemonContext.allPokemonList.filter((pokemon) => {
    return pokemonContext.selectedPokemon.includes(pokemon.id) ? true : false;
  });

  const pokemonListLength = pokemonList.length;

  const filledList = pokemonList.concat(
    new Array(MAX_LENGTH - pokemonListLength).fill(null)
  );

  return (
    <StDashboard>
      {filledList.map((pokemon, index) => {
        return !pokemon ? (
          <PokemonCard key={index} cardType="empty" />
        ) : (
          <PokemonCard
            key={`dashboard${pokemon.id}`}
            pokemon={pokemon}
            text="삭제"
            action={pokemonContext.removePokemon}
          />
        );
      })}
    </StDashboard>
  );
};

export default Dashboard;
