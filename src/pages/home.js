import React, { useState, useEffect } from 'react';
import { HeaderContainer } from '../containers/header';
import { MainContainer } from '../containers/main';
import { LoadingContainer } from '../containers/loading';
import { FooterContainer } from '../containers/footer';
import { MobileNavMenuContainer } from '../containers/mobile-nav-menu';
import { Background } from '../components';
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
      <MobileNavMenuContainer showMobileNav={showMobileNav} />
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
