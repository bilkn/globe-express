import styled from 'styled-components/macro';

export const Container = styled.nav`
  background: whitesmoke;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

export const List = styled.ul``;
export const Item = styled.li`
  border: 1px solid black;
  font-size: 1.6rem;
  padding: 1em 0;
  text-align: center;
`;
export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  height: 30px;
  text-align: center;
  z-index: 1000;
  @media (max-width: 48em) {
    display: block;
  }
`;

export const Icon = styled.span`
  background-color: ${(props) => (props.clicked ? 'transparent' : 'black')};
  display: inline-block;
  height: 2px;
  position: relative;
  width: 25px;

  &::before,
  &::after {
    content: '';
    background-color: black;
    display: inline-block;
    height: 2px;
    left: 0;
    position: absolute;
    transition: transform 300ms;
    width: 25px;
  }

  &::before {
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
    top: ${(props) => (props.clicked ? '0' : '-8px')};
  }
  &::after {
    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
    top: ${(props) => (props.clicked ? '0' : '8px')};
  }

  &::before {
    top: -8px;
  }
  &::after {
    top: 8px;
  }
`;
