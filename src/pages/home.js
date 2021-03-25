import React, { useState, useEffect } from 'react';
import { HeaderContainer } from '../containers/header';
import { MainContainer } from '../containers/main';
import { LoadingContainer } from '../containers/loading';
import { Background, MobileNavMenu } from '../components';
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
      {showMobileNav && (
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
        </MobileNavMenu>
      )}

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
      </Background>
    </>
  );
}
