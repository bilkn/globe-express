import React from 'react';
import {
  Container,
  Wrapper,
  Title,
  Subtitle,
  Text,
  Box,
  Button,
} from './styles/hero';

function Hero({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Hero.Title = function HeroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Hero.Wrapper = function HeroWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
Hero.Subtitle = function HeroSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
Hero.Text = function HeroText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Hero.Box = function HeroBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Hero.Button = function HeroButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

export default Hero;
