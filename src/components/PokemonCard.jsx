import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDetail } from '../redux/slices/pokemonSlice';

const PokemonCard = ({ pokemon, action, text }) => {
  const dispatch = useDispatch();
  return (
    <StCard>
      <StLink onClick={() => dispatch(setDetail({ type: '', id: pokemon.id }))} to={`./Detail`}>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
      </StLink>
      <h3>{pokemon.korean_name}</h3>
      <span>No. {pokemon.id}</span>
      <Button text={text} action={action} pokemon={pokemon}></Button>
    </StCard>
  );
};

const StLink = styled(Link)`
  width: '80%';
  margin: '0px';
`;

const StCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 200px;
  height: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  overflow: hidden;
  gap: 20px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }

  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
  }

  /* 카드 ID */
  span {
    font-size: 0.9em;
    color: #666;
  }
`;

export default PokemonCard;
