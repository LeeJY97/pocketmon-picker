import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';

const imgStyle = {
  width: '80%',
  margin: '0px',
};

const PokemonCard = ({ pokemon, cardType, action, text }) => {
  return cardType === 'empty' ? (
    <StEmpty>
      <img src='/src/assets/images/pokeball.png' alt='포켓볼' style={imgStyle} />
    </StEmpty>
  ) : (
    <StCard>
      <img src={pokemon.img_url} alt={pokemon.korean_name} style={imgStyle} />
      <Link to={`./Detail/${pokemon.id}`}>
        <span>{pokemon.korean_name}</span>
      </Link>
      <span>No. {pokemon.id}</span>
      <Button text={text} action={action} id={pokemon.id}></Button>
    </StCard>
  );
};

const StImg = styled.img``;

const StCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  border: 1px solid grey;
  flex: 0 0 15%;

  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StEmpty = styled.div`
  border: 2px dashed grey;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PokemonCard;
