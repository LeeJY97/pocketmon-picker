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

const getSelectedPokemonList = ({
  selected,
  navigateToDetail,
  text,
  action,
}) => {
  const pokemonList = MOCK_DATA.filter((_, index) => {
    return selected.includes(index) ? true : false;
  });

  const pokemonCardList = addEmptyCard({
    pokemonList,
    action,
    text,
    navigateToDetail,
  });

  return pokemonCardList;
};

const addEmptyCard = ({ pokemonList, action, text, navigateToDetail }) => {
  const pokemonCardList = [];

  for (let i = 0; i < 6; i++) {
    if (!pokemonList[i]) {
      pokemonCardList.push(<PokemonCard cardType="empty" />);
    } else {
      pokemonCardList.push(
        <PokemonCard
          {...pokemonList[i]}
          action={action}
          text={text}
          index={pokemonList[i].id - 1}
          navigateToDetail={navigateToDetail}
        />
      );
    }
  }

  return pokemonCardList;
};

const Dashboard = (props) => {
  const pokemonCardList = getSelectedPokemonList(props);

  return (
    <StDashboard>
      {pokemonCardList.map((pokemon, index) => pokemon)}
    </StDashboard>
  );
};

export default Dashboard;
