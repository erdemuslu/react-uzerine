import React from 'react';

import getPosts from './api';

const posts = getPosts();

const List = () => {
  const data = posts.get();
  return (
    <div>
      {data.map((item, index) => <div key={index.toString()}>{item.title}</div>)}
    </div>
  );
};

export default List;
