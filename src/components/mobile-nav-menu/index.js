import React from 'react';
import { Container, List, Item } from './styles/mobile-nav-menu';

function MobileNavMenu({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

MobileNavMenu.List = function MobileNavMenuList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
MobileNavMenu.Item = function MobileNavMenuItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
MobileNavMenu.LinkButton = function MobileNavMenuItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

export default MobileNavMenu;
