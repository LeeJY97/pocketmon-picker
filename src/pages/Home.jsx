import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const moveDexPage = (path) => {
    navigate(path);
  };

  return (
    <StBackground>
      <StBox>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/404px-International_Pok%C3%A9mon_logo.svg.png" />
        <Button
          text="포켓몬 도감 시작하기"
          type=""
          action={() => moveDexPage("/Dex")}
        ></Button>
      </StBox>
    </StBackground>
  );
};

const StBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffcc01;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export default Home;
