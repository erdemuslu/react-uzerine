import React from 'react'

// load store
import Store from './store/Store';

// load components
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Store>
      <div className="container" role="main">
        <Wrapper />
      </div>
    </Store>
  )
}

export default App
