import React, { useRef } from 'react';
import PokemonCard from './PokemonCard';
import styled from 'styled-components';
import { removePokemon } from '../redux/slices/pokemonSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPremium } from '../redux/slices/pokemonSlice';

const StDashboard = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  gap: 20px;
`;

const Dashboard = () => {
  const { allPokemonList, selectedPokemon, maxDashboardLength } = useSelector(
    (state) => state.pokemon
  );

  const countRef = useRef(0);
  countRef.current++;

  const dispatch = useDispatch();

  console.log('countRef.current', countRef.current);

  if (countRef.current > 3) {
    dispatch(setIsPremium({ isPremium: true, maxDashboardLength: 8 }));
  }

  const pokemonList = allPokemonList.filter((pokemon) => {
    return selectedPokemon.includes(pokemon.id) ? true : false;
  });

  const pokemonListLength = pokemonList.length;

  const filledList = pokemonList.concat(
    new Array(maxDashboardLength - pokemonListLength).fill(null)
  );

  return (
    <StDashboard>
      {filledList.map((pokemon, index) => {
        return !pokemon ? (
          <PokemonCard key={index} cardType='empty' />
        ) : (
          <PokemonCard
            key={`dashboard${pokemon.id}`}
            pokemon={pokemon}
            text='삭제'
            action={removePokemon}
          />
        );
      })}
    </StDashboard>
  );
};

export default Dashboard;
