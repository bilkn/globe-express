import React from 'react';
import {
  Container,
  Wrapper,
  Card,
  Title,
  Subtitle,
  Controls,
  Button,
  LinearProgress,
  LinearProgressBar,
  Counter,
} from './styles/card-slider';

function CardSlider({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

CardSlider.Wrapper = function CardSliderWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

CardSlider.Card = function CardSliderCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

CardSlider.Title = function CardSlideTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
CardSlider.Subtitle = function CardSliderSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

CardSlider.Controls = function CardSliderControls({ children, ...restProps }) {
  return <Controls {...restProps}>{children}</Controls>;
};

CardSlider.Button = function CardSliderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
CardSlider.LinearProgress = function CardSliderLinearProgress({
  children,
  ...restProps
}) {
  return <LinearProgress {...restProps}>{children}</LinearProgress>;
};
CardSlider.LinearProgressBar = function CardSliderLinearProgressBar({
  ...restProps
}) {
  return <LinearProgressBar {...restProps}></LinearProgressBar>;
};
CardSlider.Counter = function CardSliderCounter({ children, ...restProps }) {
  return <Counter {...restProps}>{children}</Counter>;
};

export default CardSlider;
