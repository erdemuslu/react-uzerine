import React, { createContext, useReducer } from 'react'
import { node } from 'prop-types'

// load reducers
import mainReducer from '../reducer/mainReducer'

// craete initial payload
const payload = {
  index: 0,
  style: {
    transform: 'translateX(0)',
    opacity: 1
  }
}

// create context
export const MainContext = createContext(payload);

// create Store
function Store({ children }) {
  const [state, dispatch] = useReducer(mainReducer, payload);
  const value = { state, dispatch };

  return (
    <MainContext.Provider value={value}>
      { children }
    </MainContext.Provider>
  )
}

Store.defaultProps = {
  children: null
}

Store.propTypes = {
  children: node
}

export default Store;
