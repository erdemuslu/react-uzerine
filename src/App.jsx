import React, { useState } from 'react'

// load store
import Store from './store/Store';

// load components
import Welcome from './components/Welcome';
import Article from './components/Article';

function App() {
  const [components] = useState([
    <Welcome />, <Article />
  ]);

  return (
    <Store>
      <div className="container" role="main">
        <div role="main" className="wrapper">
          { components[0] }
        </div>
      </div>
    </Store>
  )
}

export default App
