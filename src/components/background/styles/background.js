import styled from 'styled-components/macro';

export const Container = styled.div`
  background: url(${(props) => props.bg}) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-width: 265px;
  position: relative;
  transition: background 400ms 100ms;

  &::after {
    background-color: rgba(0, 0, 0, 0.1);
    bottom: 0;
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    width: 100%;
  }

  @media (max-width: 64em) {
    background-image: url(${(props) => props.bgSmall});
  }
`;
