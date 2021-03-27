import React from 'react';
import { Loading } from './components';
const Home = React.lazy(() => import('./pages/home'));

function App() {
  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <Home />
      </React.Suspense>
    </>
  );
}

export default App;
