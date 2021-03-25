import styled from 'styled-components/macro';

export const Container = styled.nav`
  background: whitesmoke;
  display: none;
  height: 100vh;
  left: 0;
  position: fixed;
  /*  transform: ${({ isActive }) =>
    isActive ? 'translateY(0)' : 'translateY(-100%)'}; */
  transition: transform 300ms;
  top: 0;
  width: 100vw;
  z-index: 100;

  @media (max-width: 48rem) {
    display: flex;
  }
`;

export const List = styled.ul`
  margin: auto;
  width: 100%;
`;
export const Item = styled.li`
  border-color: black;
  border-style: solid;
  border-width: 0 0 1px 0;
  cursor: pointer;
  font-size: 1.6rem;
  padding: 1em 0;
  transition: background-color 200ms;
  text-align: center;
  &:hover {
    background: white;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  height: 30px;
  position: relative;
  text-align: center;
  z-index: 1000;
  @media (max-width: 48em) {
    align-items: center;
    display: flex;
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
    top: -8px;
  }
  &::after {
    top: 8px;
  }

  &::before {
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
    top: ${(props) => (props.clicked ? '0' : '-8px')};
  }

  &::after {
    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
    top: ${(props) => (props.clicked ? '0' : '8px')};
  }
`;
