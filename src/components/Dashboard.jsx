import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

const StDashboard = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  gap: 20px;
`;

const Dashboard = ({ text, action }) => {
  const pokemonContext = useContext(PokemonContext);

  const pokemonList = pokemonContext.allPokemonList.filter((_, index) => {
    return pokemonContext.selectedIndex.includes(index) ? true : false;
  });

  const MAX_LENGTH = 6;
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
            key={`dashboard${pokemon.id - 1}`}
            {...pokemon}
            action={action}
            text={text}
            index={pokemon.id - 1}
          />
        );
      })}
    </StDashboard>
  );
};

export default Dashboard;
