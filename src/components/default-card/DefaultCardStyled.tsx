import styled from 'styled-components';

const DefaultCardStyled = styled.div`
  height: 600px;
  width: 500px;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border-radius: 20px;
  border: none;
`;
export default DefaultCardStyled;
