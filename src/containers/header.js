import { Header, MobileNavMenu } from '../components';
import { Search } from '@styled-icons/bootstrap/Search';
import { Download } from '@styled-icons/entypo/Download';
import { Globe2 } from '@styled-icons/bootstrap/Globe2';
import 'styled-components/macro';
import useMatchMedia from '../hooks/useMatchMedia';

export function HeaderContainer(props) {
  const { showMobileNav, setShowMobileNav, children } = props;
  const { isMatched } = useMatchMedia('(max-width:48rem)');
  return (
    <Header>
      <Header.LogoWrapper>
        <Globe2
          css={`
            color: ${showMobileNav && isMatched ? 'black' : 'white'};
            margin-right: 16px;
            transition: color 300ms;
          `}
          size="36px"
        />
        <Header.Logo>Globe Express</Header.Logo>
      </Header.LogoWrapper>
      <Header.Wrapper>
        <Header.Nav>
          <Header.Menu>
            <Header.MenuItem>
              <Header.Link>HOME</Header.Link>
            </Header.MenuItem>
            <Header.MenuItem>
              <Header.Link>HOLIDAYS</Header.Link>
            </Header.MenuItem>
            <Header.MenuItem>
              <Header.Link>DESTINATIONS</Header.Link>
            </Header.MenuItem>
            <Header.MenuItem>
              <Header.Link>FLIGHTS</Header.Link>
            </Header.MenuItem>
            <Header.MenuItem>
              <Header.Link>OFFERS</Header.Link>
            </Header.MenuItem>
            <Header.MenuItem
              css={`
                margin: 0;
              `}
            >
              <Header.Link>CONTACT</Header.Link>
            </Header.MenuItem>
          </Header.Menu>
        </Header.Nav>
        <Header.Box>
          <Header.Button
            css={`
              margin-right: 15px;
              @media (max-width: 50em) {
                margin-right: 0;
              }
              @media (max-width: 48em) {
                display: none;
              }
            `}
            aria-label="Search"
          >
            <Search size="24" />
          </Header.Button>
          <Header.Button
            css={`
              @media (max-width: 50em) {
                display: none;
              }
            `}
            aria-label="Download"
          >
            <Download size="24" />
          </Header.Button>
        </Header.Box>
        <MobileNavMenu.Button
          onClick={() => setShowMobileNav(!showMobileNav)}
          aria-label="Close"
        >
          <MobileNavMenu.Icon clicked={showMobileNav} />
        </MobileNavMenu.Button>
      </Header.Wrapper>
      {children}
    </Header>
  );
}
