import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import MOCK_DATA from '../mock';
import { StMain } from '../styled/StMain';
import { addPokemon } from '../redux/slices/pokemonSlice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setDetail } from '../redux/slices/pokemonSlice';

const StSlide = styled.div``;

const StCard = styled.div`
  width: 250px;
  height: 350px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 40%;
  object-fit: contain;
`;

const CardContent = styled.div`
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardTitle = styled.h2`
  font-size: 1.1rem;
  margin: 0;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 10px 0;
`;

const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #f4f4f4;
  padding: 10px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: #333;
`;
// TODO 무한 슬라이드 ?
const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedDetail } = useSelector((state) => state.pokemon);
  const { img_url, korean_name, types, id, description } = MOCK_DATA[selectedDetail - 1];

  return (
    <StMain gap={'10px'}>
      <StCard>
        <CardImage src={img_url} />
        <CardContent>
          <CardTitle>{`No.${id} ${korean_name}`}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <FooterText>{`[${types.join(', ')}]`}</FooterText>
        </CardFooter>
      </StCard>
      <Button
        text='추가'
        type='default'
        action={() => {
          dispatch(addPokemon(id));
        }}
      ></Button>

      <Button text='뒤로 가기' type='back' action={() => navigate(-1)}></Button>
      <Button
        text='이전 포켓몬'
        type='back'
        action={() => dispatch(setDetail({ type: 'prev', id }))}
      ></Button>
      <Button
        text='다음 포켓몬'
        type='back'
        action={() => dispatch(setDetail({ type: 'next', id }))}
      ></Button>
    </StMain>
  );
};

export default Detail;
