import React, { useEffect } from 'react';
import styled from 'styled-components';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';

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
  return (
    <StMainContainer>
      <StHeadSection>
        <h1>나만의 포켓몬</h1>
        <Dashboard />
      </StHeadSection>
      <StBodySection>
        <PokemonList />
      </StBodySection>
    </StMainContainer>
  );
};

export default Dex;
