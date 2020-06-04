import React, { useEffect, useState } from 'react'

import Child from './Child'

const App = () => {
  const [childValue, setChildValue] = useState(0)

  const updateChildValue = () => setChildValue(prevState => prevState + 1)

  return (
    <div>
      React app rendered:
      <Child value={childValue} />
      <button type="button" onClick={updateChildValue}>Update Child Value</button>
    </div>
  )
}

export default App
