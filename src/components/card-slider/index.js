import React from 'react';
import {
  Container,
  Grid,
  Card,
  Title,
  Subtitle,
  Controls,
  Box,
  Button,
  LinearProgress,
  LinearProgressBar,
  Counter,
} from './styles/card-slider';

function CardSlider({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

CardSlider.Grid = function CardSliderGrid({ children, ...restProps }) {
  return <Grid {...restProps}>{children}</Grid>;
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

CardSlider.Box = function CardSliderBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
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
