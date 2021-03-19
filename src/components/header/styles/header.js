import styled from 'styled-components/macro';

export const Container = styled.header`
  align-items: center;
  color: whitesmoke;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
`;
export const Logo = styled.h1`
  align-items:center;
  display: flex;
  font-size: 1.5rem;
`;
export const Nav = styled.nav`
  margin-right: 50px;
`;
export const Menu = styled.ul`
  align-items: center;
  display: flex;
  padding-top: 5px;
`;
export const MenuItem = styled.li`
  border-bottom: 2px solid #f7ba5300; 
  cursor: pointer;
  margin-bottom: -2px;
  margin-right: 30px;
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
  color: whitesmoke;
  transition: color 150ms;
  &:hover {
    color: #f5f5f5ab;
  }
`;
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;

