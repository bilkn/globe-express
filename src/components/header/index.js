import React from 'react';
import {
  LogoWrapper,
  Logo,
  Nav,
  Menu,
  MenuItem,
  Container,
  Box,
  Button,
  Wrapper,
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

Header.LogoWrapper = function HeaderLogoWrapper({ ...restProps }) {
  return <LogoWrapper {...restProps}></LogoWrapper>;
};

Header.Logo = function HeaderLogo({ ...restProps }) {
  return <Logo {...restProps}></Logo>;
};

Header.Button = function HeaderButton({ ...restProps }) {
  return <Button {...restProps}></Button>;
};

export default Header;
