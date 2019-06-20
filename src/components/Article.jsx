import React from 'react';

// load components
import Button from './shared/Button';

function Article() {
  return (
    <div role="main" className="box">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, aut.
      <Button
        text="Call to action"
      />
    </div>
  )
}

export default Article;
