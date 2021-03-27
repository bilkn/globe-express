import React, { useState, useEffect } from 'react';
import 'styled-components/macro';
import { HeaderContainer } from '../containers/header';
import { MainContainer } from '../containers/main';
import { FooterContainer } from '../containers/footer';
import { MobileNavMenuContainer } from '../containers/mobile-nav-menu';
import { Background, CardSlider } from '../components';
import { progress } from '../animations';
import cardData from '../fixtures/card-slider.json';
import { detectWebP } from '../helpers/detectWebP';

export default function Home() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [translateXValue, setTranslateXValue] = useState(0);
  const [isProgressAnimationPlay, setIsProgressAnimationPlay] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleLoad = () => {
    setIsProgressAnimationPlay(true);
  };

  useEffect(() => {
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  const handleProgressAnimation = () => {
    setCurrentCardIndex((currentCardIndex) => currentCardIndex + 1);
    setTranslateXValue((translateXValue) => translateXValue - 270);
  };

  return (
    <>
      <CardSlider.LinearProgress
        css={`
          max-width: initial;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1;
        `}
      >
        <CardSlider.LinearProgressBar
          onAnimationIteration={handleProgressAnimation}
          onAnimationEnd={handleProgressAnimation}
          css={`
            animation: ${currentCardIndex < cardData.length - 1 &&
              isProgressAnimationPlay
                ? progress
                : 'none'}
              5s linear ${cardData.length - 1} 50ms forwards;
            height: 4px;
            width: 100%;
          `}
        />
      </CardSlider.LinearProgress>
      <MobileNavMenuContainer showMobileNav={showMobileNav} />

      <Background
        bg={`${cardData[currentCardIndex].image}${
          detectWebP() ? '.webp' : '.jpg'
        }`}
        bgSmall={`${cardData[currentCardIndex].background}${
          detectWebP() ? '.webp' : '.jpg'
        }`}
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
