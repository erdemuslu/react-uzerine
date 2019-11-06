import React, { useEffect, useState } from 'react';

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch('https://api.github.com/users/erdemuslu');
        const data = await res.json();
        setUser(data);
      } catch (err) {
        throw new Error(`'Opps!' ${err}`);
      }
    }

    fetchUser();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="type an username"
      />
      {
        Object.values(user).length > 0
          ? (
            <div>
              <h1>User details:</h1>
              <p>{`Fullname: ${user.name}`}</p>
              <img src={user.avatar_url} alt="avatar" />
            </div>
          )
          : <h1>loading</h1>
      }
    </div>
  );
};

export default App;
