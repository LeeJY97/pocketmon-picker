import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { StMain } from '../styled/StMain';

const Home = () => {
  const navigate = useNavigate();

  return (
    <StMain gap={'30px'}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/404px-International_Pok%C3%A9mon_logo.svg.png' />
      <Button text='포켓몬 도감 시작하기' action={() => navigate('/Dex')}></Button>
    </StMain>
  );
};

export default Home;
