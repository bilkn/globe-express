import styled from 'styled-components/macro';

export const Container = styled.div`
  background: url(${(props) => props.bg}) no-repeat;
  background-size: cover;
  display:flex;
  flex-direction: column;
  height: 100%;
  min-height: 660px;
  transition: background 400ms 100ms;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 64em) {
    background-image: url(${(props) => props.bgSmall});
  }
`;
