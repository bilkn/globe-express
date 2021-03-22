import styled from 'styled-components/macro';
import { slideInBottom } from '../../../animations';

export const Container = styled.div`
  color: white;
  flex-shrink: 0;
  padding-top: 65px;
  position: relative;
  width: 40%;

  @media (max-width: 64em) {
    width: initial;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 350px;
  position: relative;
  @media (max-width: 64em) {
    height: initial;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  position: absolute;
  top: 25px;

  @media (max-width: 64em) {
    line-height: 2em;
    position: static;
    text-align: center;
  }
  @media (max-width: 100em) {
    font-size: calc(1.5vw + 0.3em);
  }
`;

export const Subtitle = styled.h3`
  animation: ${slideInBottom} 700ms;
  font-size: 4rem;
  text-transform: uppercase;

  
  @media (max-width: 100em) {
    font-size: calc(1.5vw + 2em);
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6rem;
  white-space: unset;
  @media (max-width: 64em) {
    margin-bottom: 2em;
  }
`;

export const Box = styled.div`
  align-items: flex-end;
  display: flex;
  flex-basis: 100%;
  @media (max-width: 64em) {
    flex-basis: initial;
    justify-content: center;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 20px;
  color: inherit;
  padding: 0.7rem 1.2rem;
  transition: background 200ms;
  &:hover {
    background: ${(props) => props.hoverBg};
  }
`;
