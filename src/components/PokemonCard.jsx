import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDetail } from '../redux/slices/pokemonSlice';

const imgStyle = {
  width: '100%',
  margin: '0px',
};

const PokemonCard = ({ pokemon, cardType, action, text }) => {
  const dispatch = useDispatch();
  return cardType === 'empty' ? (
    <StEmpty>
      <img src='/src/assets/images/pokeball.png' alt='포켓볼' style={imgStyle} />
    </StEmpty>
  ) : (
    <StCard>
      {/* <StLink to={`./Detail/${pokemon.id}`}> */}
      <StLink onClick={() => dispatch(setDetail({ type: '', id: pokemon.id }))} to={`./Detail`}>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
      </StLink>
      <h3>{pokemon.korean_name}</h3>
      <span>No. {pokemon.id}</span>
      <Button text={text} action={action} id={pokemon.id}></Button>
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

const StEmpty = styled.div`
  flex-shrink: 0;
  border: 2px dashed #aaa; /* 회색을 약간 밝은 색으로 변경 */
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9; /* 밝은 회색 배경색 추가 */
  border-radius: 10px; /* 모서리를 둥글게 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 추가 */
  position: relative;

  /* 애니메이션 효과 추가 */
  &:hover {
    border-color: #888;
    background-color: #eaeaea;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
`;

export default PokemonCard;
