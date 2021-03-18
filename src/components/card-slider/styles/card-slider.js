import styled from 'styled-components/macro';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-template-rows: 1fr;
  padding: 65px 40px;
  overflow: hidden;
  white-space: nowrap;
`;
export const Card = styled.div`
  background: url(${(props) => props.background}) center no-repeat;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 15px 15px 50px #000;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: flex-end;
  margin-right: 40px;
  padding: 1.5rem;
  white-space: normal;
`;
export const Title = styled.h2`
  font-size: 1rem;
  margin-bottom: 1rem;
`;
export const Subtitle = styled.h3`
  text-transform: uppercase;
`;
