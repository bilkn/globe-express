import React from 'react';
import Home from './pages/home';
import cardData from './fixtures/card-slider.json';
import { Helmet } from 'react-helmet';
import { detectWebP } from './helpers/detectWebP';
function App() {
  return (
    <>
      <Helmet>
        {detectWebP() &&
          cardData.map((data) => (
            <link rel="preload" href={data.image} as="image" key={data.image} />
          ))}
      </Helmet>
      <Home />
    </>
  );
}

export default App;
