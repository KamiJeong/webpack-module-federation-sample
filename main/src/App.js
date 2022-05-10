import React, {Suspense, lazy} from 'react';

const RemoteSub1 = lazy(() => import('sub1/App'));
const RemoteSub2 = lazy(() => import('sub2/App'));


function App() {
  return (
    <div>
      Main App Project
      <Suspense fallback="loading... sub1">
        <RemoteSub1/>
      </Suspense>
      <Suspense fallback="loading... sub2">
        <RemoteSub2/>
      </Suspense>
    </div>
  );
}

export default App;
