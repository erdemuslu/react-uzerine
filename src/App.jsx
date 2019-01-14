import React, { useState } from 'react'

import List from './components/List'
import Form from './components/Form'

const App = () => {
  const [items, setItems] = useState([]);

  const onAdd = (text) => {
    console.log(text)
    items.push({
      text
    })

    setItems(items)
  }

  return (
    <div>
      <Form
        onAdd={onAdd}
      />
      <List items={items} />
    </div>
  )
}

export default App
