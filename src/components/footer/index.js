import React from 'react';
import { Container, Wrapper, Text, Link, Span } from './styles/footer';

function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return (
    <Link target="_blank" {...restProps}>
      {children}
    </Link>
  );
};

Footer.Span = function FooterSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};

export default Footer;
