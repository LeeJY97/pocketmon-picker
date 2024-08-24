import styled from 'styled-components';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import { useDispatch } from 'react-redux';
import { setPlan } from '../redux/slices/pokemonSlice';

const StMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1400px;
  position: absolute;
`;

const StHeadSection = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  min-height: 450px;
  margin-bottom: 20px;
`;

const StBodySection = styled.section`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
`;

// TODO 포지션 box를 따로 or style 컴포넌트 확장 관련 찾아보기
const StPlanButton = styled.button`
  position: relative;
  top: 100px;
  left: 100px;
  width: 50px;
  height: 30px;
  background-color: #b2b2f3;
  border-radius: 6px;
  border: none;
`;

const Dex = () => {
  const dispatch = useDispatch();
  return (
    <StMainContainer>
      <StPlanButton onClick={() => dispatch(setPlan('standard'))}>유료</StPlanButton>
      <StHeadSection>
        <h1>나만의 포켓몬</h1>
        <Dashboard />
      </StHeadSection>
      <StBodySection>
        <PokemonList />
      </StBodySection>
    </StMainContainer>
  );
};

export default Dex;
