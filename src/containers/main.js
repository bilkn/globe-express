import React from 'react';
import { Main } from '../components';
import { ContentContainer } from './content';
import 'styled-components/macro';


export function MainContainer(props) {
  const {
    currentCardIndex,
    setCurrentCardIndex,
    translateXValue,
    setTranslateXValue,
    isProgressAnimationPlay,
    setIsProgressAnimationPlay,
  } = props;
  return (
    <Main>
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
