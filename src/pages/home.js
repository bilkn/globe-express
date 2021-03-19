import React, { useState } from 'react';
import { HeaderContainer } from '../containers/header';
import { MainContainer } from '../containers/main';
import { Background } from '../components';
import cardData from '../fixtures/card-slider.json';

export default function Home() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [translateXValue, setTranslateXValue] = useState(0);

  return (
    <Background bg={cardData[currentCardIndex].image}>
      <HeaderContainer />
      <MainContainer
        currentCardIndex={currentCardIndex}
        setCurrentCardIndex={setCurrentCardIndex}
        translateXValue={translateXValue}
        setTranslateXValue={setTranslateXValue}
      />
    </Background>
  );
}
