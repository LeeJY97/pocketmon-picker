import styled from 'styled-components';
import Dashboard from './Dashboard';

const StHeadSection = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  min-height: 450px;
  margin-bottom: 20px;
  background-color: #f8f8f8;
  padding: 30px 10px 0px 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const HeadSection = ({ headSectionRef }) => {
  console.log('headSectionRef', headSectionRef);
  return (
    <StHeadSection ref={headSectionRef}>
      <h1>MY POKEMON</h1>
      <Dashboard />
    </StHeadSection>
  );
};

export default HeadSection;
