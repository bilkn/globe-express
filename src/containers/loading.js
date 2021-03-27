import React from 'react';
import { Loading } from '../components';
import globeGIF from '../icons8-globe.gif';
import 'styled-components/macro';

export function LoadingContainer() {
  return (
    <Loading>
      <Loading.Wrapper>
        <Loading.Img
          src={globeGIF}
          width="96"
          height="96"
          alt="Animated globe icon"
        />
        <Loading.Text>Travelling...</Loading.Text>
      </Loading.Wrapper>
      <Loading.Attribution>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://icons8.com/icons/set/globe--v1"
        >
          Globe icon
        </a>{' '}
        icon by{' '}
        <a target="_blank" rel="noreferrer" href="https://icons8.com">
          Icons8
        </a>
      </Loading.Attribution>
    </Loading>
  );
}
