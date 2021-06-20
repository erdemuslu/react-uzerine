import React from 'react'
import Card from './Card'

const App = () => (
  <div>
    <Card
      title="Lorem ipsum"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis totam optio fugit sequi quae dolor magni minus, fugiat alias!"
      buttonText="Test button text"
      data={['test1', 'test2', 'test3', 'test1', 'test2', 'test4']}
    />
  </div>
)

export default App
