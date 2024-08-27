import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StBox = styled.ul`
  width: 200px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50px;
  transform: translate(0, -50%);

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow-y: scroll;
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

const AddPokemonList = () => {
  const { selectedPokemon } = useSelector((state) => state.pokemon);

  return (
    <StBox>
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
