import React from 'react';
import {Container, Card, Title, Subtitle} from "./styles/card-slider";

function CardSlider({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

CardSlider.Card = function HeaderCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

CardSlider.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
CardSlider.Subtitle = function HeaderSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};



export default CardSlider;
