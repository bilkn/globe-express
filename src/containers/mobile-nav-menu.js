import React from 'react';
import { MobileNavMenu } from '../components';
import { Github, Linkedin } from '@styled-icons/bootstrap';
import 'styled-components/macro';

export function MobileNavMenuContainer({ showMobileNav }) {
  return (
    <MobileNavMenu isActive={showMobileNav}>
      <MobileNavMenu.List>
        <MobileNavMenu.Item
          css={`
            border-top-width: 1px;
          `}
        >
          <MobileNavMenu.Link>Home</MobileNavMenu.Link>
        </MobileNavMenu.Item>
        <MobileNavMenu.Item>
          <MobileNavMenu.Link>Holidays</MobileNavMenu.Link>
        </MobileNavMenu.Item>
        <MobileNavMenu.Item>
          <MobileNavMenu.Link>Destinations</MobileNavMenu.Link>
        </MobileNavMenu.Item>
        <MobileNavMenu.Item>
          <MobileNavMenu.Link>Flights</MobileNavMenu.Link>
        </MobileNavMenu.Item>
        <MobileNavMenu.Item>
          <MobileNavMenu.Link>Offers</MobileNavMenu.Link>
        </MobileNavMenu.Item>
        <MobileNavMenu.Item>
          <MobileNavMenu.Link>Contacts</MobileNavMenu.Link>
        </MobileNavMenu.Item>
      </MobileNavMenu.List>
      <MobileNavMenu.Wrapper>
        <MobileNavMenu.List
          css={`
            display: flex;
            flex-direction: row;
            margin: 0;
          `}
        >
          <MobileNavMenu.Item
            css={`
              border: none;
              margin-right: 15px;
              &:hover {
                background: none !important;
              }
            `}
          >
            <MobileNavMenu.Link
              href="https://github.com/bilkn/globe-express"
              aria-label="GitHub repo"
            >
              <Github size="36px" />
            </MobileNavMenu.Link>
          </MobileNavMenu.Item>
          <MobileNavMenu.Item
            css={`
              border: none;
              &:hover {
                background: none !important;
              }
            `}
          >
            <MobileNavMenu.Link
              href="https://www.linkedin.com/in/bilkankonus/"
              aria-label="LinkedIn"
            >
              <Linkedin size="36px" />
            </MobileNavMenu.Link>
          </MobileNavMenu.Item>
        </MobileNavMenu.List>
      </MobileNavMenu.Wrapper>
      <MobileNavMenu.Wrapper>
        <MobileNavMenu.Text>
          &#169; 2021 Coded by Bilkan Konus, inspired by{' '}
          <MobileNavMenu.AttributionLink href="https://dribbble.com/Giulio_Cuscito">
            Giulio Cuscito
          </MobileNavMenu.AttributionLink>
          .
        </MobileNavMenu.Text>
      </MobileNavMenu.Wrapper>
    </MobileNavMenu>
  );
}
