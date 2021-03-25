import React from 'react';
import {
  Container,
  Wrapper,
  List,
  Link,
  Text,
  AttributionLink,
  Item,
  Button,
  Icon,
} from './styles/mobile-nav-menu';

function MobileNavMenu({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

MobileNavMenu.Wrapper = function MobileNavMenuWrapper({
  children,
  ...restProps
}) {
  return <Wrapper {...restProps}>{children} </Wrapper>;
};

MobileNavMenu.List = function MobileNavMenuList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

MobileNavMenu.Item = function MobileNavMenuItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

MobileNavMenu.Link = function MobileNavMenuLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

MobileNavMenu.Text = function MobileNavMenuText({
  children,
  ...restProps
}) {
  return <Text {...restProps}>{children}</Text>;
};

MobileNavMenu.AttributionLink = function MobileNavMenuAttributionLink({
  children,
  ...restProps
}) {
  return <AttributionLink {...restProps}>{children}</AttributionLink>;
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
