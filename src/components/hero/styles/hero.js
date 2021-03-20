import styled from 'styled-components/macro';

export const Container = styled.div`
  color: white;
  flex-shrink: 0;
  padding-top: 65px;
  position: relative;
  width: 40%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 350px;
  position: relative;
`;

export const Title = styled.h2`
  position: absolute;
  top: 25px;
`;

export const Subtitle = styled.h3`
  font-size: 4rem;
  text-transform: uppercase;
`;

export const Text = styled.p`
  line-height: 1.6rem;
  white-space: unset;
`;

export const Box = styled.div`
  align-items: flex-end;
  display: flex;
  flex-basis: 100%;
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
