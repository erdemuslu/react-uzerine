import React, { useState } from 'react'

import Child from './Child'

const App = () => {
  const [item, setItem] = useState('Erdem')
  const [value, setValue] = useState('')

  const updateItem = () => {
    setItem(value)
  }

  return (
    <div>
      <input
        type="text"
        onChange={e => setValue(e.target.value)}
      />
      <button type="button" onClick={updateItem}>
        Update Item
      </button>
      <Child
        name={item}
      />
    </div>
  )
}

export default App
