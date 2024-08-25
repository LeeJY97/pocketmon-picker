import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setPlan } from '../redux/slices/pokemonSlice';
import HeadSection from '../components/HeadSection';
import BodySection from '../components/BodySection';

const StMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1400px;
  position: absolute;
`;

// TODO 포지션 box를 따로 or style 컴포넌트 확장 관련 찾아보기
const StPlanButton = styled.button`
  position: relative;
  top: 100px;
  left: 50px;
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
      <StPlanButton onClick={() => dispatch(setPlan('premium'))}>유료</StPlanButton>
      <HeadSection />
      <BodySection />
    </StMainContainer>
  );
};

export default Dex;
