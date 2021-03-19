import React, { useCallback, useEffect, useState } from 'react';
import { Main } from '../components';
import { ContentContainer } from './content';
import { CardSlider } from '../components';
import { progress } from '../animations';
import 'styled-components/macro';

export function MainContainer() {


  const handleAnimationEnd = ()=> {
    console.log("hello")
  }

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
          onAnimationEnd = {handleAnimationEnd}
          css={`
            animation: ${progress} 5s linear;
            width: 100%;
          `}
        />
      </CardSlider.LinearProgress>
      <ContentContainer></ContentContainer>
    </Main>
  );
}
