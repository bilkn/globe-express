import styled from 'styled-components/macro';

export const Container = styled.div`
  background: url(${(props) => props.bg}) left center no-repeat;
  background-size: cover;
  height: 100%;
  transition: background 400ms;
`;
