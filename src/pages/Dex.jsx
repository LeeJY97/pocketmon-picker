import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setPlan } from '../redux/slices/pokemonSlice';
import HeadSection from '../components/HeadSection';
import BodySection from '../components/BodySection';
import AddPokemonList from '../components/AddPokemonList';
import Button from '../components/Button';
import { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const StMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1400px;
  position: absolute;
  background-image: url('https://img.freepik.com/free-vector/gradient-pastel-sky-background_23-2148908165.jpg?t=st=1724679600~exp=1724683200~hmac=ba812abc090a613dec7b08c8d1fa76ea4c2b427c0faaca548a89aebcd833bc32&w=1060');
  background-size: 1920px 1080px;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const StPlanBox = styled.div`
  position: fixed;
  top: 100px;
  right: 50px;
  background-color: #b2b2f3;
  border-radius: 6px;
  border: none;
`;

const Dex = () => {
  const dispatch = useDispatch();
  const [isHeadSectionVisible, headSectionRef] = useIntersectionObserver();

  return (
    <StMainContainer>
      <StPlanBox>
        <Button text='유료' onClick={() => dispatch(setPlan('premium'))} />
      </StPlanBox>
      <HeadSection headSectionRef={headSectionRef} />
      {!isHeadSectionVisible && <AddPokemonList />}
      <BodySection />
    </StMainContainer>
  );
};

export default Dex;
