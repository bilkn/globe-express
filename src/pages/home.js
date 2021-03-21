import React, { useState, useEffect } from 'react';
import { HeaderContainer } from '../containers/header';
import { MainContainer } from '../containers/main';
import { LoadingContainer } from '../containers/loading';
import { Background } from '../components';
import cardData from '../fixtures/card-slider.json';

export default function Home() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [translateXValue, setTranslateXValue] = useState(0);
  const [isProgressAnimationPlay, setIsProgressAnimationPlay] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

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
      <LoadingContainer isDataLoaded={isDataLoaded}/>
      <Background bg={cardData[currentCardIndex].image}>
        <HeaderContainer />
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
