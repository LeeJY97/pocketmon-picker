import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { setPageItems } from '../redux/slices/pokemonSlice';

const COLORS = {
  true: css`
    background-color: #202020;
    color: #e6e6e6;
  `,
  false: css`
    background-color: #e6e6e6;
    color: #202020;
  `,
};

const StContainer = styled.div`
  display: flex;
  margin: 30px auto;
  width: 900px;
  height: 50px;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const StPageButton = styled.button`
  ${(props) => COLORS[props['data-is-selected']]};
  border-radius: 50px;
  border: none;
  width: 30px;
  height: 30px;
`;

const PageButtonSection = () => {
  const dispatch = useDispatch();
  const { buttonList, page: currentPage } = useSelector((state) => state.pokemon);

  return (
    <StContainer>
      {buttonList.map((page) => (
        <StPageButton
          key={page}
          onClick={() => dispatch(setPageItems(page))}
          data-is-selected={currentPage === page}
        >
          {page}
        </StPageButton>
      ))}
    </StContainer>
  );
};

export default PageButtonSection;
