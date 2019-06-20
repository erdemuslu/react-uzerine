import React, { useContext } from 'react';

// load main context
import { MainContext } from '../store/Store';

// load components
import Button from './shared/Button';

function End() {
  const { state } = useContext(MainContext);

  return (
    <div
      role="main"
      className="box end"
      style={state.style}
    >
      End
      <Button
        text="Doesn't work"
      />
    </div>
  )
}

export default End;
