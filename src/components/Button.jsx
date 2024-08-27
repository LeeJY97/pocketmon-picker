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

const StBtn = styled.button`
  ${(props) => props['data-color-style']}
  border: none;
  padding: 3px 5px 3px 5px;
  border-radius: 4px;
`;

const Button = ({ text, type = 'default', pokemon, action }) => {
  const dispatch = useDispatch();
  const colorStyle = COLORS[type];

  return (
    <StBtn data-color-style={colorStyle} onClick={() => dispatch(action(pokemon))}>
      {text}
    </StBtn>
  );
};

export default Button;
