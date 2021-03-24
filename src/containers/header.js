import { Header, MobileNavMenu } from '../components';
import { Search } from '@styled-icons/bootstrap/Search';
import { Download } from '@styled-icons/entypo/Download';
import { Globe2 } from '@styled-icons/bootstrap/Globe2';
import 'styled-components/macro';
import { useState } from 'react';
export function HeaderContainer({ children }) {
  const [click, setClick] = useState(false);
  return (
    <Header>
      <Header.LogoWrapper>
        <Globe2
          css={`
            margin-right: 16px;
          `}
          size="36px"
        />
        <Header.Logo>Globe Express</Header.Logo>
      </Header.LogoWrapper>
      <Header.Wrapper>
        <Header.Nav>
          <Header.Menu>
            <Header.MenuItem>HOME</Header.MenuItem>
            <Header.MenuItem>HOLIDAYS</Header.MenuItem>
            <Header.MenuItem>DESTINATIONS</Header.MenuItem>
            <Header.MenuItem>FLIGHTS</Header.MenuItem>
            <Header.MenuItem>OFFERS</Header.MenuItem>
            <Header.MenuItem
              css={`
                margin: 0;
              `}
            >
              CONTACT
            </Header.MenuItem>
          </Header.Menu>
        </Header.Nav>
        <Header.Box>
          <Header.Button
            css={`
              margin-right: 15px;
              @media (max-width: 48em) {
                display: none;
              }
            `}
          >
            <Search size="24" />
          </Header.Button>
          <Header.Button
            css={`
              @media (max-width: 50em) {
                display: none;
              }
            `}
          >
            <Download size="24" />
          </Header.Button>
        </Header.Box>
        <MobileNavMenu.Button onClick={() => setClick(!click)}>
          <MobileNavMenu.Icon clicked={click} />
        </MobileNavMenu.Button>
      </Header.Wrapper>
      {children}
    </Header>
  );
}
