import React, { useContext } from 'react'

// load main context
import { MainContext } from '../store/Store';

// load data
import componentsData from '../data/componentsData';

function Wrapper() {
  const { state } = useContext(MainContext);

  return (
    <div role="main" className="wrapper">
      { componentsData[state.index] }
    </div>
  )
}

export default Wrapper;
