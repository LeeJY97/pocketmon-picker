import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Button = ({ text, type = '', id, action }) => {
  const dispatch = useDispatch();

  return (
    <StBtn type={type} onClick={() => dispatch(action(id))}>
      {text}
    </StBtn>
  );
};

const colorMap = {};

const getButtonStyles = (type) => {
  switch (type) {
    case 'back':
      return {
        backgroundColor: 'black',
        color: 'white',
      };
    default:
      return {
        backgroundColor: 'red',
        color: 'white',
      };
  }
};

const StBtn = styled.button`
  ${({ type }) => {
    const styles = getButtonStyles(type);
    return `
      background-color:${styles.backgroundColor};
      color:${styles.color};
  `;
  }}
  border: none;
  padding: 3px 5px 3px 5px;
  border-radius: 4px;
`;

export default Button;
