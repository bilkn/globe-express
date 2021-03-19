import styled from 'styled-components/macro';

export const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;
  padding: 65px;
  padding-bottom: 140px;
  width: 40%;
`;

export const Title = styled.h2``;

export const Subtitle = styled.h3`
  font-size: 4rem;
`;

export const Text = styled.p`
  margin-bottom: 1rem;
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