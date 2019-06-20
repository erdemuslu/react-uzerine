import React from 'react';
import { string } from 'prop-types';

function Button({ text }) {
  // handle animation
  const handle = () => {
    console.log('button clicked')
  }

  return (
    <button
      type="button"
      onClick={handle}
    >
      { text }
    </button>
  )
}

Button.defaultProps = {
  text: ''
}

Button.propTypes = {
  text: string
}

export default Button;
