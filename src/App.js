import React from 'react';
import { Loading } from './components';
import { Helmet } from 'react-helmet';
import cardData from './fixtures/card-slider.json';
import { detectWebP } from './helpers/detectWebP';

const Home = React.lazy(() => import('./pages/home'));

function App() {
  const mql = window.matchMedia('(min-width:64em)');

  return (
    <>
      {
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
      }
      <React.Suspense fallback={<Loading />}>
        <Home />
      </React.Suspense>
    </>
  );
}

export default App;
