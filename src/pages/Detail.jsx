import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../mock";

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { img_url, korean_name, types, id, description } = MOCK_DATA[params.id];

  return (
    <StBackground>
      <StBox>
        <img src={img_url} />
        <p>{korean_name}</p>
        <p>{types.join(", ")}</p>
        <p>No. {id}</p>
        <p>{description}</p>

        <Button text="뒤로 가기" type="" action={() => navigate(-1)}></Button>
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
export default Detail;
