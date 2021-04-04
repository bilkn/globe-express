import styled from 'styled-components/macro';

export const Container = styled.footer`
  color: white;
  line-height: 1.4em;
  padding: 0.3em 0.5em;
  position: relative;
  z-index: 1;
  @media (max-width: 64em) {
    text-align: center;
  }
  @media (max-width: 30em) {
    padding: 0.2em;
  }
`;

export const Wrapper = styled.div`
  display: inline-block;
`;

export const Link = styled.a`
  color: inherit;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  transition: color 100ms;
  &:hover {
    color: #ededed;
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  display:inline-block;
   @media (max-width: 64em) {
    text-align: center;
  }
`;

export const Span = styled.span`
  margin-right: 0.7em;
`;
