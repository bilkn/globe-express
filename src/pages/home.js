import React, { useState, useEffect } from 'react';
import { HeaderContainer } from '../containers/header';
import { MainContainer } from '../containers/main';
import { LoadingContainer } from '../containers/loading';
import { FooterContainer } from '../containers/footer';
import { Background, MobileNavMenu } from '../components';
import { Github, Linkedin } from '@styled-icons/bootstrap';
import cardData from '../fixtures/card-slider.json';
import 'styled-components/macro';

export default function Home() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [translateXValue, setTranslateXValue] = useState(0);
  const [isProgressAnimationPlay, setIsProgressAnimationPlay] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleLoad = () => {
    setIsProgressAnimationPlay(true);
    setIsDataLoaded(true);
  };

  useEffect(() => {
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <>
      <MobileNavMenu isActive={showMobileNav}>
        <MobileNavMenu.List>
          <MobileNavMenu.Item
            css={`
              border-top-width: 1px;
            `}
          >
            Home
          </MobileNavMenu.Item>
          <MobileNavMenu.Item>Holidays</MobileNavMenu.Item>
          <MobileNavMenu.Item>Destinations</MobileNavMenu.Item>
          <MobileNavMenu.Item>Flights</MobileNavMenu.Item>
          <MobileNavMenu.Item>Offers</MobileNavMenu.Item>
          <MobileNavMenu.Item>Contacts</MobileNavMenu.Item>
        </MobileNavMenu.List>
        <MobileNavMenu.Wrapper>
          <MobileNavMenu.List
            css={`
              margin: 0;
            `}
          >
            <MobileNavMenu.Link
              css={`
                margin-right: 15px;
              `}
              href="https://github.com/bilkn"
            >
              <Github size="36px" />
            </MobileNavMenu.Link>
            <MobileNavMenu.Link href="https://www.linkedin.com/in/bilkankonus/">
              <Linkedin size="36px" />
            </MobileNavMenu.Link>
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

      <LoadingContainer isDataLoaded={isDataLoaded} />
      <Background
        bg={cardData[currentCardIndex].image}
        bgSmall={cardData[currentCardIndex].background}
      >
        <HeaderContainer
          showMobileNav={showMobileNav}
          setShowMobileNav={setShowMobileNav}
        />
        <MainContainer
          currentCardIndex={currentCardIndex}
          setCurrentCardIndex={setCurrentCardIndex}
          translateXValue={translateXValue}
          setTranslateXValue={setTranslateXValue}
          isProgressAnimationPlay={isProgressAnimationPlay}
          setIsProgressAnimationPlay={setIsProgressAnimationPlay}
        />
        <FooterContainer />
      </Background>
    </>
  );
}
