import React, { useState } from 'react'
import Child from './Child'

const App = () => {
  const [value, setValue] = useState('')

  return (
    <div>
      React app
      <input
        type="text"
        name="name"
        id="name"
        onChange={e => setValue(e.target.value)}
        placeholder="Bir seyler yazin"
      />
      <br />
      <Child value={value} />
    </div>
  )
}

export default App
