import React from 'react';
import { Container, Img } from './styles/loading';

function Loading({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Loading.Img = function LoadingImg({ ...restProps }) {
  return <Img {...restProps} />;
};

export default Loading;
