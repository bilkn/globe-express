import React from 'react';
import { Container } from './styles/background';

function Background({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

export default Background;
