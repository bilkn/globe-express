import React from 'react';
import { Footer } from '../components';
import { Github, Linkedin } from '@styled-icons/bootstrap';
import 'styled-components/macro';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Text>
        &#169; 2021 Coded by Bilkan Konus, inspired by{' '}
        <Footer.Link href="https://dribbble.com/Giulio_Cuscito">
          Giulio Cuscito
        </Footer.Link>
        <Footer.Span>.</Footer.Span>
      </Footer.Text>
      <Footer.Wrapper>
        <Footer.Link
          href="https://github.com/bilkn"
          aria-label="GitHub"
          css="margin-right: 0.7em;"
        >
          <Github size="24" css="vertical-align:text-bottom" />
        </Footer.Link>
        <Footer.Link
          href="https://www.linkedin.com/in/bilkankonus/"
          aria-label="LinkedIn"
        >
          <Linkedin size="24" css="vertical-align:text-bottom" />
        </Footer.Link>
      </Footer.Wrapper>
    </Footer>
  );
}
