import React from "react";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import { StMain } from "../styled/StMain";
import { usePokemon } from "../context/PokemonContext";

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const pokemonContext = usePokemon();

  const { img_url, korean_name, types, id, description } =
    MOCK_DATA[params.id - 1];

  return (
    <StMain gap={"10px"}>
      <img src={img_url} />
      <p>{korean_name}</p>
      <p>{types.join(", ")}</p>
      <p>No. {id}</p>
      <p>{description}</p>
      <button onClick={() => pokemonContext.addPokemon(id)}>추가</button>

      <Button text="뒤로 가기" type="" action={() => navigate(-1)}></Button>
    </StMain>
  );
};

export default Detail;
