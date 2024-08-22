import React from "react";
import styled from "styled-components";

const Button = ({ text, type = "button", id, action }) => {
  return (
    <StBtn type={type} onClick={() => action(id)}>
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
