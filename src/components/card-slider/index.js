import React from 'react';
import { Container, Card, Title, Subtitle, Text } from './styles/card-slider';

function CardSlider({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

CardSlider.Card = function Card({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};
CardSlider.Text = function Text({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
CardSlider.Title = function Title({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
CardSlider.Text = function Text({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

export default CardSlider;
