import React from 'react';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import MOCK_DATA from '../mock';
import { StMain } from '../styled/StMain';
import { addPokemon } from '../redux/slices/pokemonSlice';
import { useDispatch } from 'react-redux';

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();

  const { img_url, korean_name, types, id, description } = MOCK_DATA[params.id - 1];

  return (
    <StMain gap={'10px'}>
      <img src={img_url} />
      <p>{korean_name}</p>
      <p>{types.join(', ')}</p>
      <p>No. {id}</p>
      <p>{description}</p>
      <Button
        text='추가'
        type='default'
        action={() => {
          dispatch(addPokemon(id));
        }}
      ></Button>

      <Button text='뒤로 가기' type='back' action={() => navigate(-1)}></Button>
    </StMain>
  );
};

export default Detail;
