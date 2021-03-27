import React from 'react';
import Home from './pages/home';
import cardData from './fixtures/card-slider.json';
import { Helmet } from 'react-helmet';
import { detectWebP } from './helpers/detectWebP';
function App() {
  const mql = window.matchMedia('(min-width:64em)');

  return (
    <>
      {/* Two Helmet components used, because "react-helmet" doesn't support jsx fragments */}
      <Helmet>
        {cardData.map((data) => (
          <link
            rel="preload"
            href={`${data.background}${detectWebP() ? '.webp' : '.jpg'}`}
            as="image"
            key={data.background}
          />
        ))}
      </Helmet>
      {mql.matches && (
        <Helmet>
          {cardData.map((data) => (
            <link
              rel="preload"
              href={`${data.image}${detectWebP() ? '.webp' : '.jpg'}`}
              as="image"
              key={data.image}
            />
          ))}
        </Helmet>
      )}

      <Home />
    </>
  );
}

export default App;
