import React from 'react'

// load store
import Store from './store/Store';

// load components
import List from './components/List'
import Button from './components/Button'

const App = () => (
  <Store>
    <List />
    <Button />
  </Store>
)

export default App
