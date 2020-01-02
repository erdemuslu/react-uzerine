import React, { Suspense } from 'react';

import Loading from './Loading';
import List from './List';

const App = () => (
  <div>
    <Suspense
      fallback={<Loading />}
    >
      <List />
    </Suspense>
  </div>
);

export default App;
