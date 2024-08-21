import React from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const StDashboard = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  gap: 20px;
`;

const Dashboard = ({ selectedIndex, navigateToDetail, text, action }) => {
  const pokemonList = MOCK_DATA.filter((_, index) => {
    return selectedIndex.includes(index) ? true : false;
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
            navigateToDetail={navigateToDetail}
          />
        );
      })}
    </StDashboard>
  );
};

export default Dashboard;
