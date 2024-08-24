import PokemonCard from './PokemonCard';
import styled from 'styled-components';
import { removePokemon } from '../redux/slices/pokemonSlice';
import { useSelector } from 'react-redux';

const StDashboard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  gap: 20px;
`;

const Dashboard = () => {
  const { allPokemonList, selectedPokemon, maxDashboardLength } = useSelector(
    (state) => state.pokemon
  );

  const pokemonList = allPokemonList.filter((pokemon) => selectedPokemon.includes(pokemon.id));

  const filledList = pokemonList.concat(
    new Array(maxDashboardLength - pokemonList.length).fill(null)
  );

  return (
    <StDashboard>
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
