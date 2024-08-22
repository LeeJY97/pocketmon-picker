import React from 'react';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import MOCK_DATA from '../mock';
import { StMain } from '../styled/StMain';
import { addPokemon } from '../redux/slices/pokemonSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();

  const { img_url, korean_name, types, id, description } = MOCK_DATA[params.id - 1];
  const addComplete = () => toast('추가 완료!', { autoClose: 1000 });
  const addFail = () => toast('실패');

  return (
    <StMain gap={'10px'}>
      <img src={img_url} />
      <p>{korean_name}</p>
      <p>{types.join(', ')}</p>
      <p>No. {id}</p>
      <p>{description}</p>
      <button
        onClick={() => {
          try {
            dispatch(addPokemon(id));
            addComplete();
          } catch (e) {
            addFail();
          }
        }}
      >
        추가
      </button>

      <Button text='뒤로 가기' type='' action={() => navigate(-1)}></Button>
      <ToastContainer />
    </StMain>
  );
};

export default Detail;
