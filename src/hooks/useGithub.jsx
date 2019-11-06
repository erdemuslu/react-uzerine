import { useEffect, useState } from 'react';

const useGithub = (username) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchUser() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        setError(null);
        setUser(data);
        setIsLoading(false);
      } catch (err) {
        setUser(null);
        setError(err);
        setIsLoading(false);
      }
    }

    fetchUser();
  }, [username]);

  return { user, error, isLoading };
};

export default useGithub;
