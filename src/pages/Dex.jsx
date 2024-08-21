import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { PokemonContext } from "../context/PokemonContext";

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
  height: 450px;
`;

const StBodySection = styled.section`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
`;

const Dex = () => {
  const [selectedIndex, setSelectedIndex] = useState([]);
  const [allPokemonList] = useState(() => MOCK_DATA);

  const navigate = useNavigate();

  const addPokemon = (index) => {
    if (selectedIndex.length >= 6) {
      alert("6개 이상하려면 돈내야됨");
      return;
    }
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
    <PokemonContext.Provider
      value={{ allPokemonList, selectedIndex, navigateToDetail }}
    >
      <StMainContainer>
        <StHeadSection>
          <h1>나만의 포켓몬</h1>
          <Dashboard action={removePokemon} text="삭제" />
        </StHeadSection>
        <StBodySection>
          <PokemonList action={addPokemon} text="추가" />
        </StBodySection>
      </StMainContainer>
    </PokemonContext.Provider>
  );
};

export default Dex;
