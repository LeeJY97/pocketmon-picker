import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const imgStyle = {
  width: "80%",
  margin: "0px",
};

const getFormCard = ({
  id,
  img_url,
  korean_name,
  pokemon_types,
  description,
  cardType,
  action,
  text,
  index,
  navigateToDetail,
}) => {
  switch (cardType) {
    case "empty":
      return (
        <StEmpty>
          <img src="/src/assets/images/pokeball.png" alt="" style={imgStyle} />
        </StEmpty>
      );
    default:
      return (
        <StCard>
          <img src={img_url} alt="" style={imgStyle} />
          <Link to={`./Detail/${index}`}>
            <span>{korean_name}</span>
          </Link>
          <span>No. {id}</span>
          <Button text={text} action={action} index={index}></Button>
        </StCard>
      );
  }
};

const PokemonCard = (props) => {
  const card = getFormCard(props);

  return card;
};

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
