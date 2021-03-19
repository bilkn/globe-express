import styled from 'styled-components/macro';

export const Container = styled.div`
  background: url(${(props) => props.bg}) left center no-repeat;
  background-size: cover;
  background-blend-mode: darken;
  height: 100%;
  transition: background 400ms 100ms;
`;
