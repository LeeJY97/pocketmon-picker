import styled from 'styled-components';
import PokemonList from './PokemonList';

const StBodySection = styled.section`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 880px;
  gap: 20px;

  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const BodySection = () => {
  return (
    <StBodySection>
      <PokemonList />
    </StBodySection>
  );
};

export default BodySection;
