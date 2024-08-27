import PokemonCard from './PokemonCard';
import styled from 'styled-components';
import { removePokemon } from '../redux/slices/pokemonSlice';
import { useSelector } from 'react-redux';
import useWheel from '../hooks/useWheel';
import PokemonEmptyCard from './PokemonEmptyCard';

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
  const dashboardRef = useWheel();

  const { selectedPokemon, maxDashboardLength } = useSelector((state) => state.pokemon);
  const emptyList = new Array(maxDashboardLength - selectedPokemon.length).fill(null);

  return (
    <StDashboard ref={dashboardRef}>
      {selectedPokemon.map((pokemon, index) => {
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
      {emptyList.map((_, index) => (
        <PokemonEmptyCard key={index} />
      ))}
    </StDashboard>
  );
};

export default Dashboard;
