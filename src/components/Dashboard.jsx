import PokemonCard from './PokemonCard';
import styled from 'styled-components';
import { removePokemon } from '../redux/slices/pokemonSlice';
import { useSelector } from 'react-redux';
import useDashboard from '../hooks/useDashboard';

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
  const dashboardRef = useDashboard();

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
