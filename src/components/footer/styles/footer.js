import styled from 'styled-components/macro';

export const Container = styled.footer`
  color: white;
  padding: 1em;
  position: relative;
  z-index: 1;
`;

export const Link = styled.a`
  color: inherit;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Text = styled.p``;
