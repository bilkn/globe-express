import React from 'react';
import { Container, Wrapper, Img, Text } from './styles/loading';

function Loading({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Loading.Wrapper = function LoadingWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Loading.Img = function LoadingImg({ ...restProps }) {
  return <Img {...restProps} />;
};

Loading.Text = function LoadingText({ children, ...restProps }) {
  return <Text {...restProps}> {children} </Text>;
};

export default Loading;
