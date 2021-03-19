import { Header } from '../components';
import { Search } from '@styled-icons/bootstrap/Search';
import { Download } from '@styled-icons/entypo/Download';
import { Globe2 } from '@styled-icons/bootstrap/Globe2';
import 'styled-components/macro';
export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Logo>
        <Globe2
          css={`
            margin-right: 16px;
          `}
          size="36px"
        />
        Globe Express
      </Header.Logo>
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
            `}
          >
            <Search size="24" />
          </Header.Button>
          <Header.Button>
            <Download size="24" />
          </Header.Button>
        </Header.Box>
      </Header.Wrapper>
      {children}
    </Header>
  );
}
