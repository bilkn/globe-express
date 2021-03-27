import styled from 'styled-components/macro';
import { loadingDot } from '../../../animations';
export const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  position: absolute;
  transition: opacity 400ms;
  top: 0;
  overflow: hidden;
  width: 100vw;
  z-index: 1000000;
`;

export const Wrapper = styled.div`
  margin: auto;
`;

export const Img = styled.img`
  display: block;
  margin-bottom: 1em;
`;

export const Text = styled.p`
  font-size: 1.1rem;
`;

export const Attribution = styled.p`
  align-items: flex-end;
  padding: 1em;
  text-align: center;
`;

export const Span = styled.span`
  ::before {
    animation: ${loadingDot} 1s infinite;
    content: '';
  }
`;
