import styled from 'styled-components/macro';

export const Container = styled.nav`
  align-items: center;
  background: whitesmoke;
  display: none;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  min-height: 720px;
  left: 0;
  position: fixed;
  transform: ${({ isActive }) =>
    isActive ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.4s;
  top: 0;
  width: 100vw;
  z-index: 100;

  @media (max-width: 48rem) {
    display: flex;
  }
`;

export const Wrapper = styled.div``;

export const Link = styled.a`
  color: black;
  display: inline-block;
  transition: color 100ms;

  &:hover {
    color: #000000a6;
  }
`;

export const Text = styled.p`
  padding: 0.5em;
  text-align: center;
`;
export const AttributionLink = styled.a`
  color: blue;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const List = styled.ul`
  margin-bottom: 1em;
  margin-top: 6em;
  width: 100%;
`;
export const Item = styled.li`
  border-color: black;
  border-style: solid;
  border-width: 0 0 1px 0;
  cursor: pointer;
  font-size: 1.6rem;
  padding: 1em 0;
  text-align: center;
  transition: background-color 200ms;
  &:hover {
    background: white;
  }

  @media (max-width: 40em) {
    padding: 0.5em;
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
  background-color: ${(props) => (props.clicked ? 'transparent' : 'white')};
  display: inline-block;
  height: 2px;
  position: relative;
  transition: background-color 300ms;
  width: 25px;

  &::before,
  &::after {
    content: '';
    background-color: ${(props) => (props.clicked ? 'black' : 'white')};
    display: inline-block;
    height: 2px;
    left: 0;
    position: absolute;
    transition: 300ms;
    transition-property: background-color, transform;
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
`;
