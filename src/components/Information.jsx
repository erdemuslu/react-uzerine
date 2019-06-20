import React, { useContext } from 'react';

// load main context
import { MainContext } from '../store/Store';

// load components
import Button from './shared/Button';

function Information() {
  const { state } = useContext(MainContext);

  return (
    <div
      role="main"
      className="box information"
      style={state.style}
    >
      Information
      <Button
        text="Call to action"
      />
    </div>
  )
}

export default Information;
