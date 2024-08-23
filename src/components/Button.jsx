import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

// css
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

const Button = ({ text, type = 'default', id, action }) => {
  const dispatch = useDispatch();
  const colorStyle = COLORS[type];

  console.log('colorStyle', colorStyle);

  return (
    <StBtn colorStyle={colorStyle} onClick={() => dispatch(action(id))}>
      {text}
    </StBtn>
  );
};

// css
const StBtn = styled.button`
  ${(props) => props.colorStyle}
  border: none;
  padding: 3px 5px 3px 5px;
  border-radius: 4px;
`;

// styled 컴포넌트 `css`
// https://www.daleseo.com/react-button-component/
// const getButtonStyles = (type) => {
//   switch (type) {
//     case 'back':
//       return {
//         backgroundColor: 'black',
//         color: 'white',
//       };
//     default:
//       return {
//         backgroundColor: 'red',
//         color: 'white',
//       };
//   }
// };

// // css
// const StBtn = styled.button`
//   ${({ type }) => {
//     const styles = getButtonStyles(type);
//     return `
//       background-color:${styles.backgroundColor};
//       color:${styles.color};
//   `;
//   }}
//   border: none;
//   padding: 3px 5px 3px 5px;
//   border-radius: 4px;
// `;

export default Button;
