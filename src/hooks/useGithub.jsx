import { useEffect, useState } from 'react';

const useGithub = (username) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        throw new Error(`'Opps!' ${err}`);
      }
    }

    fetchUser();
  }, [username]);

  return user;
};

export default useGithub;
