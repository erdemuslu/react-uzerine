import React, { useState } from 'react';

import UserDetails from './components/UserDetails';

const App = () => {
  let inputRef;
  const [username, setUsername] = useState(null);

  return (
    <div>
      <input
        type="text"
        placeholder="type an username"
        ref={(e) => { inputRef = e; }}
      />
      <button
        type="button"
        aria-label="button"
        onClick={() => { setUsername(inputRef.value); }}
      >
        Fetch
      </button>
      {
        username
          ? <UserDetails username={username} />
          : null
      }
    </div>
  );
};

export default App;
