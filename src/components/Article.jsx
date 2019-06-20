import React, { useContext } from 'react';

// load main context
import { MainContext } from '../store/Store';

// load components
import Button from './shared/Button';

function Article() {
  const { state } = useContext(MainContext);

  return (
    <div
      role="main"
      className="box article"
      style={state.style}
    >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, aut.
      <Button
        text="Call to action"
      />
    </div>
  )
}

export default Article;
