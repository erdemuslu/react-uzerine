import React, { useState, Suspense } from 'react';

import Loading from './Loading';
import List from './List';

const App = () => {
  const [fetchType, setFetchType] = useState('user');

  return (
    <div>
      <button
        type="button"
        onClick={() => setFetchType('posts')}
      >
        Update Type
      </button>
      <Suspense
        fallback={<Loading />}
      >
        <List fetchType={fetchType} />
      </Suspense>
    </div>
  );
};

export default App;
