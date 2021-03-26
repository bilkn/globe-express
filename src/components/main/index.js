import React from 'react';
import { Container } from './styles/main';

function Main({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

export default Main;
