import React from 'react';
import styled from 'styled-components';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import { useDispatch } from 'react-redux';
import { setIsPremium } from '../redux/slices/pokemonSlice';

const StMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1400px;
  position: absolute;
`;

const StHeadSection = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  min-height: 450px;
  margin-bottom: 20px;
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

const StPremiumButton = styled.button`
  position: relative;
  top: 100px;
  left: 100px;
  width: 50px;
  height: 30px;
  background-color: #b2b2f3;
  border-radius: 6px;
  border: none;
`;

const Dex = () => {
  const dispatch = useDispatch();

  const handlePremium = () => {
    dispatch(setIsPremium({ isPremium: true, maxDashboardLength: 8 }));
  };
  return (
    <StMainContainer>
      <StPremiumButton onClick={handlePremium}>유료</StPremiumButton>
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
