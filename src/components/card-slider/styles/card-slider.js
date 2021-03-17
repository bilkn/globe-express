import styled from 'styled-components/macro';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-template-rows: 1fr;
  overflow: hidden;
  white-space: nowrap;
`;
export const Card = styled.div`
  border: 1px solid red;
  border-radius: 20px;
  display:flex;
  flex-direction: column;
  height: 350px;
  justify-content: flex-end;
  margin-right: 40px;
  padding: 1.5rem;
  white-space: normal;
`;
export const Title = styled.h2`
  font-size: 1rem;
`;
export const Subtitle = styled.h3``;
