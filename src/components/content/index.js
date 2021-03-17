import React from 'react';
import { Container } from './styles/content';

function Content({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

export default Content;
