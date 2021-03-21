import React from 'react';
import { Loading } from '../components';
import globeGIF from '../icons8-globe.gif';
import 'styled-components/macro';
export function LoadingContainer({ isDataLoaded }) {
  return (
    <Loading
      css={`
        opacity: ${!isDataLoaded ? 1 : 0};
        z-index: ${!isDataLoaded ? 2 : 0};
      `}
    >
      <Loading.Img src={globeGIF} alt="Animated globe icon" />
    </Loading>
  );
}
