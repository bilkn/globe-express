import React from 'react';
import {
  Logo,
  Nav,
  Menu,
  MenuItem,
  Container,
  Box,
  Button,
  Wrapper,
  Icon,
} from './styles/header';

function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Nav = function HeaderNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};
Header.Menu = function HeaderMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{children}</Menu>;
};
Header.MenuItem = function HeaderMenuItem({ ...restProps }) {
  return <MenuItem {...restProps}></MenuItem>;
};
Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
Header.Box = function HeaderBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};
Header.Logo = function HeaderLogo({ ...restProps }) {
  return <Logo {...restProps}></Logo>;
};

Header.Button = function HeaderButton({ ...restProps }) {
  return <Button {...restProps}></Button>;
};
Header.Icon = function HeaderIcon({ ...restProps }) {
  return <Icon {...restProps}></Icon>;
};

export default Header;
