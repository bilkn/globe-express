import styled from 'styled-components/macro';

export const Container = styled.header`
  align-items: center;
  color: white;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 1.5em;
  position: relative;
  z-index: 1;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 64em) {
    width: 100%;
  }
  @media (max-width: 48em) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
`;
export const Logo = styled.h1`
  font-size: 1.5rem;
  @media (max-width: 64em) {
    display: none;
  }
`;

export const Nav = styled.nav`
  margin-right: 50px;
  @media (max-width: 64em) {
    margin: 0;
    width: 100%;
  }
`;
export const Menu = styled.ul`
  align-items: center;
  display: flex;
  padding-top: 5px;
  @media (max-width: 64rem) {
    margin: 0 auto;
    width: max-content;
  }
`;
export const MenuItem = styled.li`
  border-bottom: 2px solid #f7ba5300;
  cursor: pointer;
  margin-bottom: -2px;
  margin-right: 30px;
  padding: 5px 0;
  transition: border-bottom-color 200ms ease;

  &:hover {
    border-bottom-color: #f7ba53;
  }
`;
export const Box = styled.div`
  align-items: center;
  display: flex;
`;
export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  transition: color 150ms;
  &:hover {
    color: #ffffffc2;
  }
`;
