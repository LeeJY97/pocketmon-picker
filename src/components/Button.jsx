import React from "react";
import styled from "styled-components";

const textMap = {};

const Button = ({ text, type, removePokemon, addPokemon, index, action }) => {
  return (
    <StBtn type={type} onClick={() => action(index)}>
      {text}
    </StBtn>
  );
};

const StBtn = styled.button`
  background-color: red;
  border: none;
  color: white;
  padding: 3px 5px 3px 5px;
  border-radius: 4px;
`;

export default Button;
