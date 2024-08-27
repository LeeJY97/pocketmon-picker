import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

const COLORS = {
  back: css`
    background-color: black;
    color: white;
  `,
  default: css`
    background-color: red;
    color: white;
  `,
};

const Button = ({ text, type = 'default', pokemon, action }) => {
  const dispatch = useDispatch();
  const colorStyle = COLORS[type];

  return (
    <StBtn colorStyle={colorStyle} onClick={() => dispatch(action(pokemon))}>
      {text}
    </StBtn>
  );
};

const StBtn = styled.button`
  ${(props) => props.colorStyle}
  border: none;
  padding: 3px 5px 3px 5px;
  border-radius: 4px;
`;

export default Button;
