import React from 'react';
import { Main } from '../components';
import { ContentContainer } from './content';
import { CardSlider } from '../components';
import { progress } from '../animations';
import 'styled-components/macro';
import cardData from '../fixtures/card-slider.json';

export function MainContainer(props) {
  const {
    currentCardIndex,
    setCurrentCardIndex,
    translateXValue,
    setTranslateXValue,
    isProgressAnimationPlay,
    setIsProgressAnimationPlay,
  } = props;

  const handleProgressAnimation = () => {
    setCurrentCardIndex((currentCardIndex) => currentCardIndex + 1);
    setTranslateXValue((translateXValue) => translateXValue - 270);
  };

  return (
    <Main>
      <CardSlider.LinearProgress
        css={`
          max-width: initial;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
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
      <ContentContainer
        currentCardIndex={currentCardIndex}
        setCurrentCardIndex={setCurrentCardIndex}
        translateXValue={translateXValue}
        setTranslateXValue={setTranslateXValue}
        isProgressAnimationPlay={isProgressAnimationPlay}
        setIsProgressAnimationPlay={setIsProgressAnimationPlay}
      />
    </Main>
  );
}
