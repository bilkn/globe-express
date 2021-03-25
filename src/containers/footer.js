import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Text>
        &#169; 2021 Coded by Bilkan Konus, inspired by{' '}
        <Footer.Link href="https://dribbble.com/Giulio_Cuscito">
          Giulio Cuscito
        </Footer.Link>
        .
      </Footer.Text>
    </Footer>
  );
}
