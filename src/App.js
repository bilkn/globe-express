import React from 'react';
import cardData from './fixtures/card-slider.json';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { detectWebP } from './helpers/detectWebP';
import {Home} from "./pages";

function App() {
  const mql = window.matchMedia('(min-width:64em)');
  return (
    <>
      <HelmetProvider>
        <Helmet>
          {cardData.map((data) => (
            <link
              rel="preload"
              href={`${mql.matches ? data.image : data.background}${
                detectWebP() ? '.webp' : '.jpg'
              }`}
              as="image"
              key={data.image}
            />
          ))}
        </Helmet>
        <Home />
      </HelmetProvider>
    </>
  );
}

export default App;
