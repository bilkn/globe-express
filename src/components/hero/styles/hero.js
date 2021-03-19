import styled from 'styled-components/macro';

export const Container = styled.div`
  color: white;
  flex-shrink: 0;
  width: 40%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

export const Title = styled.h2`
  line-height: 2em;
`;

export const Subtitle = styled.h3`
  font-size: 4rem;
  text-transform: uppercase;
`;

export const Text = styled.p`
  line-height: 1.6rem;
  margin-bottom: 5rem;
  white-space: unset;
`;

export const Box = styled.div`
  align-items: center;
  display: flex;
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
