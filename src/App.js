import React from 'react';
import { LoadingContainer } from './containers/loading';
const Home = React.lazy(() => import('./pages/home'));

function App() {
  return (
    <>
      <React.Suspense fallback={<LoadingContainer />}>
        <Home />
      </React.Suspense>
    </>
  );
}

export default App;
