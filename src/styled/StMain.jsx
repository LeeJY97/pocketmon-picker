import styled from "styled-components";

export const StMain = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffcc01;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.gap || "30px"};
`;
