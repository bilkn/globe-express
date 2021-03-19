import React, { useState } from 'react';
import { Main } from '../components';
import { ContentContainer } from './content';
import { CardSlider } from '../components';
import { progress } from '../animations';
import 'styled-components/macro';

export function MainContainer() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [translateXValue, setTranslateXValue] = useState(0);
  const handleAnimationIteration = () => {
    setCurrentCardIndex((currentCardIndex) => currentCardIndex + 1);
    setTranslateXValue((translateXValue) => translateXValue - 270);
  };

  return (
    <Main>
      <CardSlider.LinearProgress
        css={`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
        `}
      >
        <CardSlider.LinearProgressBar
          onAnimationIteration={handleAnimationIteration}
          css={`
            animation: ${progress} 5s linear 4;
            width: 100%;
          `}
        />
      </CardSlider.LinearProgress>
      <ContentContainer
        currentCardIndex={currentCardIndex}
        setCurrentCardIndex={setCurrentCardIndex}
        translateXValue={translateXValue}
        setTranslateXValue={setTranslateXValue}
      />
    </Main>
  );
}
