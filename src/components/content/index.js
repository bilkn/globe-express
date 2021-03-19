import React from 'react';
import { Container, Wrapper } from './styles/content';

function Content({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Content.Wrapper = function ContentWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

export default Content;
