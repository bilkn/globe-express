import React from 'react';
import { Container, Title, Subtitle, Text, Box, Button } from './styles/hero';

function Hero({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Hero.Title = function Title({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Hero.Subtitle = function Subtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
Hero.Text = function Text({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Hero.Box = function Box({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Hero.Button = function Button({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

export default Hero;
