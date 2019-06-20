import React, { useState, useContext } from 'react'

// load main context
import { MainContext } from '../store/Store';

// load components
import Welcome from './Welcome';
import Article from './Article';

function Wrapper() {
  const { state } = useContext(MainContext);

  const [components] = useState([
    <Welcome />, <Article />
  ]);

  return (
    <div role="main" className="wrapper">
      { components[state.index] }
    </div>
  )
}

export default Wrapper;
