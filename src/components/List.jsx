import React, { useContext } from 'react'

// load main context
import { MainContext } from '../store/Store'

const List = () => {
  const { state } = useContext(MainContext)

  return (
    <div>
      <ul>
        {
          state.map((item, index) => {
            const key = index.toString()
            return (
              <li
                key={key}
              >
                <h1>{item.name}</h1>
                <h5>{item.title}</h5>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default List
