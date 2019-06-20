import React from 'react';

// load components
import Button from './shared/Button';

function Welcome() {
  return (
    <div role="main" className="box">
      Welcome
      <Button
        text="Call to action"
      />
    </div>
  )
}

export default Welcome;
