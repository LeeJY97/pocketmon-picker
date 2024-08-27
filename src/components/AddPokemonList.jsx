import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import useWheel from '../hooks/useWheel';

const StBox = styled.ul`
  position: fixed;
  transform: translate(0, -50%);

  display: flex;
  justify-content: start;
  align-items: center;
  ${(props) => props['data-direction-style']}
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 30px;
`;

const StList = styled.li`
  width: 100px;
  height: 100px;
  background-color: #f5d4d4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  flex-shrink: 0;
`;

const DIRECTION = {
  column: css`
    flex-direction: column;
    overflow-y: scroll;
    width: 200px;
    height: 600px;
    top: 50%;
    left: 50px;
  `,
  row: css`
    flex-direction: row;
    overflow-x: scroll;
    width: 1000px;
    height: 200px;
    top: 100px;
  `,
};

const AddPokemonList = ({ direction }) => {
  const { selectedPokemon } = useSelector((state) => state.pokemon);
  const tempRef = useWheel();
  const adjustedRef = direction === 'row' ? tempRef : null;
  const directionStyle = DIRECTION[direction];

  return (
    <StBox data-direction-style={directionStyle} ref={adjustedRef}>
      {selectedPokemon.map((pokemon) => {
        return (
          <StList key={pokemon.id}>
            <img src={pokemon.img_url} />
          </StList>
        );
      })}
    </StBox>
  );
};

export default AddPokemonList;
