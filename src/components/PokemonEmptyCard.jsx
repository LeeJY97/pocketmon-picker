import styled from 'styled-components';

const imgStyle = {
  width: '100%',
  margin: '0px',
};

const StEmpty = styled.div`
  flex-shrink: 0;
  border: 2px dashed #aaa; /* 회색을 약간 밝은 색으로 변경 */
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9; /* 밝은 회색 배경색 추가 */
  border-radius: 10px; /* 모서리를 둥글게 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 추가 */
  position: relative;

  /* 애니메이션 효과 추가 */
  &:hover {
    border-color: #888;
    background-color: #eaeaea;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
`;

const PokemonEmptyCard = () => {
  return (
    <StEmpty>
      <img src='/src/assets/images/pokeball.png' alt='포켓볼' style={imgStyle} />
    </StEmpty>
  );
};

export default PokemonEmptyCard;
