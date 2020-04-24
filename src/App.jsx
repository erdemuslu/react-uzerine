import React, { useEffect } from 'react';

import Search from './components/Search';
import View from './components/View';

const App = () => {
  useEffect(() => {
    console.log('app mounted');
  }, []);

  return (
    <div role="main">
      <Search />
      <View />
    </div>
  );
};

export default App;
