import PokemonCard from './PokemonCard';
import styled from 'styled-components';
import { removePokemon } from '../redux/slices/pokemonSlice';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

const StDashboard = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 880px;
  height: 500px;
  gap: 20px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Dashboard = () => {
  const dashboardRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (dashboardRef.current) {
        dashboardRef.current.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    };

    const element = dashboardRef.current;
    if (element) {
      element.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (element) {
        element.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const { allPokemonList, selectedPokemon, maxDashboardLength } = useSelector(
    (state) => state.pokemon
  );

  const pokemonList = allPokemonList.filter((pokemon) => selectedPokemon.includes(pokemon.id));

  const filledList = pokemonList.concat(
    new Array(maxDashboardLength - pokemonList.length).fill(null)
  );

  return (
    <StDashboard ref={dashboardRef}>
      {filledList.map((pokemon, index) => {
        return (
          <PokemonCard
            key={pokemon ? `dashboard${pokemon.id}` : index}
            cardType={pokemon || 'empty'}
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
