import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const StMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1400px;
`;

const StHeadSection = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

const StBodySection = styled.section`
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
`;

const Dex = () => {
  const [selectedIndex, setSelectedIndex] = useState([]);
  const navigate = useNavigate();

  const addPokemon = (index) => {
    setSelectedIndex([...selectedIndex, index]);
  };

  const removePokemon = (index) => {
    const removeArray = selectedIndex.filter((idx) => idx !== index);
    setSelectedIndex([...removeArray]);
  };

  const navigateToDetail = (index) => {
    navigate(`./Detail/${index}`);
  };

  return (
    <StMainContainer>
      <StHeadSection>
        <h1>나만의 포켓몬</h1>
        <Dashboard
          selectedIndex={selectedIndex}
          action={removePokemon}
          text="삭제"
          navigateToDetail={navigateToDetail}
        />
      </StHeadSection>
      <StBodySection>
        <PokemonList
          pokemonList={MOCK_DATA}
          action={addPokemon}
          text="추가"
          navigateToDetail={navigateToDetail}
        />
      </StBodySection>
    </StMainContainer>
  );
};

export default Dex;
