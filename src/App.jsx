import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    async function fetchImg() {
      try {
        const res = await fetch('https://cataas.com/cat/says/hello');
        const data = res.json();

        console.log(data);
      } catch (err) {
        console.loog(err);
      }
    }

    fetchImg();
  }, []);

  return (
    <div>
      React app rendered
    </div>
  );
};

export default App;
