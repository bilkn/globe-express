import React from 'react';
import { Container, List, Item, Button, Icon } from './styles/mobile-nav-menu';

function MobileNavMenu({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

MobileNavMenu.List = function MobileNavMenuList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
MobileNavMenu.Item = function MobileNavMenuItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
MobileNavMenu.Button = function MobileNavMenuButton({
  children,
  ...restProps
}) {
  return <Button {...restProps}>{children}</Button>;
};
MobileNavMenu.Icon = function MobileNavMenuIcon({ children, ...restProps }) {
  return <Icon {...restProps} />;
};

export default MobileNavMenu;
