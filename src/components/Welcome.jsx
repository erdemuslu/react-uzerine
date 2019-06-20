import React, { useContext } from 'react';

// load main context
import { MainContext } from '../store/Store';

// load components
import Button from './shared/Button';

function Welcome() {
  const { state } = useContext(MainContext);

  return (
    <div
      role="main"
      className="box welcome"
      style={state.style}
    >
      Welcome
      <Button
        text="Call to action"
      />
    </div>
  )
}

export default Welcome;
