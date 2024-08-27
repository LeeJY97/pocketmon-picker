import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { setPageItems } from '../redux/slices/pokemonSlice';

const getColors = (isSelected) => {
  switch (isSelected) {
    case true:
      return css`
        background-color: #202020;
        color: #e6e6e6;
      `;
    default:
      return css`
        background-color: #e6e6e6;
        color: #202020;
      `;
  }
};

const StPageWrap = styled.div`
  display: flex;
  margin: 30px auto;
  width: 900px;
  height: 50px;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const StPageButton = styled.button`
  ${(props) => getColors(props.isSelected)}
  border-radius: 50px;
  border: none;
  width: 30px;
  height: 30px;
`;

const PageButtonSection = () => {
  const dispatch = useDispatch();
  const { buttonList, page: currentPage } = useSelector((state) => state.pokemon);

  return (
    <StPageWrap>
      {buttonList.map((page) => (
        <StPageButton
          key={page}
          onClick={() => dispatch(setPageItems(page))}
          isSelected={currentPage === page}
        >
          {page}
        </StPageButton>
      ))}
    </StPageWrap>
  );
};

export default PageButtonSection;
